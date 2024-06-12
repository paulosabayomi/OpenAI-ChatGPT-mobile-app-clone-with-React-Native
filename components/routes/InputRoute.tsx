import React from "react";
import { TextInput, View } from "react-native";
import useAppColor from "../../themed/appColor";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { updateMessages, updatePromptInput } from "../../shared/rdx-slice";
import { make_request } from "../../assets/constants";
import { TMessage } from "../../shared/types";
import Icons from "../../assets/icons";

const InputRoute = React.memo((props: any) => {
    const appColor = useAppColor();
    const prompt = useAppSelector(state => state.main.prompt_input);
    // const [prompt, setprompt] = React.useState<string>('')
    const dispatch = useAppDispatch();
    // const route_data = props.route.params.prompt

    React.useLayoutEffect(() => {
        // console.log("route_data", route_data);
        // setprompt(route_data)
    }, [])

    const handleSubmitPrompt = React.useCallback(() => {
        if (prompt.length === 0) return;
        const message: TMessage = {
            content: prompt,
            sender: 'user'
        }
        dispatch(updateMessages(message))
        handlePromptChatGPT(prompt)
        // setprompt('')
        dispatch(updatePromptInput(''))
    }, [prompt]);

    const handlePromptChatGPT = React.useCallback(async (prompt: string) => {
        props.navigation.goBack();
        const response = await make_request(prompt);
        if (response == undefined) return console.log("An error occured, please try again")
        const message: TMessage = {
            content: response,
            sender: 'system'
        }
        dispatch(updateMessages(message))
    }, [])
    return (
        <View style={{backgroundColor: appColor.page_modal_bg, flex: 1, position: 'relative'}}>
            <TextInput 
                defaultValue={prompt}
                verticalAlign="top"
                multiline
                // onChangeText={(text) => setprompt(text)}
                onChangeText={(text) => dispatch(updatePromptInput(text))}
                style={{height: "100%", padding: 20, color: appColor.bold_text, fontSize: 20}}
                placeholder=""
            />
            
            <View style={{position: 'absolute', bottom: 30, right: 30}}>
                <Icons.ArrowUpIcon onPress={handleSubmitPrompt} style={{width: 25, height: 25,}} />
            </View>

        </View>
    )
});

export default InputRoute