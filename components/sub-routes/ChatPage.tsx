import React from "react";
import { SafeAreaView, StyleSheet, View, useColorScheme } from "react-native";
import CustomView from "../../themed/CustomView";
import Icons from "../../assets/icons";
import useAppColor from "../../themed/appColor";
import { TextInput } from "react-native-gesture-handler";
import { MessageBox } from "../../shared/reusables";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { setActiveDrawerRoute, updateMessages, updatePromptInput } from "../../shared/rdx-slice";
import { TMessage } from "../../shared/types";
import { make_request } from "../../assets/constants";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import { pick, types } from 'react-native-document-picker'
import { useIsFocused } from "@react-navigation/native"; // added after the tutorial

const ChatPage = React.memo((props: any) => {
    const appColor = useAppColor();
    // const [prompt, setPrompt] = React.useState<string>('');
    const prompt = useAppSelector(state => state.main.prompt_input);
    const [main_icons_hidden, set_main_icons_hidden] = React.useState<boolean>(false);
    const [showExpandBtn, setShowExpandBtn] = React.useState<boolean>(false);
    const conversation = useAppSelector(state => state.main.messages);
    const app_color_mode = useAppSelector(state => state.main.app_mode);
    const system_color_mode = useColorScheme() || 'light'
    const dispatch = useAppDispatch()
    const isFocused = useIsFocused() // added after the tutorial

    // {"assets": [{"fileName": "5DDA5B3C-40A4-451F-B5BD-C92463E8073D.jpg", "fileSize": 2505488, "height": 2002, "type": "image/jpg", "uri": "file:///Users/paulos_ab/Library/Developer/CoreSimulator/Devices/FF0C3F4A-DB2C-4D12-9DA9-6BED63AEABAE/data/Containers/Data/Application/45150F30-1AF1-4329-8F35-BA5680FD5687/tmp/5DDA5B3C-40A4-451F-B5BD-C92463E8073D.jpg", "width": 3000}]}

    const handleLaunchImageLibrary = React.useCallback(async () => {
        const response = await launchImageLibrary({mediaType: "mixed", selectionLimit: 0})
        response.assets?.map(asset => {
            fetch(asset.uri as string)
            .then(res => res.blob())
            .then(data => {
                console.log("file data", data);
            })
            .catch(err => {
                console.log("an error occured while getting the file");
            })
        })
        console.log(response);
    }, [])

    const handlePickDocument = React.useCallback(() => {
        pick({
            allowMultiSelection: true,
            type: [types.pdf, types.docx],
          })
            .then((res) => {
              const allFilesArePdfOrDocx = res.every((file: any) => file.hasRequestedType)
              if (!allFilesArePdfOrDocx) {
                // tell the user they selected a file that is not a pdf or docx
              }
              console.log(res)
            })
            .catch((err: any) => {
                console.log("error", err);
                
            })
    }, [])


    const handleSubmitPrompt = React.useCallback(() => {
        if (prompt.length === 0) return;
        const message: TMessage = {
            content: prompt,
            sender: 'user'
        }
        dispatch(updateMessages(message))
        handlePromptChatGPT(prompt)
        // setPrompt('')
        dispatch(updatePromptInput(''))
    }, [prompt]);

    const handlePromptChatGPT = React.useCallback(async (prompt: string) => {
        const response = await make_request(prompt)
        if (response == undefined) return console.log("An error occured, please try again")
        const message: TMessage = {
            content: response,
            sender: 'system'
        }
        dispatch(updateMessages(message))
    }, [])

    const handleOpenExpandInput = React.useCallback(() => {
        props.navigation.navigate("InputRoute")
    }, [prompt])

    const handleInputLayout = React.useCallback((event: any) => {
        const {height} = event.nativeEvent.layout;
        if (height > 75) {
            setShowExpandBtn(true)
        }else{
            setShowExpandBtn(false)
        }
    }, []);


    // Added after the tutorial
    React.useEffect(() => {
        if (isFocused) {
            dispatch(setActiveDrawerRoute("chatpage"))            
        }
    }, [isFocused])

    return (
        <SafeAreaView style={{backgroundColor: appColor.main_bg}}>
            <View style={{height: '100%', width: '100%', paddingTop: 10}}>
                {
                    conversation.length > 0 ?
                    <View style={{flex: 1, flexShrink: 0, backgroundColor: 'green'}}>
                        <CustomView style={{paddingHorizontal: 20}}>
                            {
                                conversation.map(message => <MessageBox message={message.content} sender={message.sender} />)
                            }
                        </CustomView>
                    </View>:
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{borderRadius: 50, padding: 10, backgroundColor: appColor.bold_text }}>
                            <Icons.OpenAIIcon mode={(app_color_mode == "system" ? system_color_mode : app_color_mode) == "dark" ? "light" : "dark"} style={{width: 30, height: 30}} />
                        </View>
                        
                    </View>
                }



                {/* text input container */}
                <View style={[styles.text_box_container, {paddingTop: 10}]}>
                    <View style={{flexDirection: 'row', flexShrink: 1, marginRight: 20, alignItems: 'center'}}>
                        {
                            main_icons_hidden ?
                            <View style={{width: 35, height: 35, marginBottom: 2, backgroundColor: appColor.line_color, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                                <Icons.PlusIcon style={{width: 25, height: 25}} />
                            </View>:
                            <>
                                <Icons.CameraIcon onPress={() => props.navigation.navigate('Camera')} style={{width: 35, height: 35}} />
                                <Icons.ImageIcon onPress={handleLaunchImageLibrary} style={{width: 25, height: 25, marginLeft: 10}} />
                                <Icons.FolderIcon onPress={handlePickDocument} style={{width: 25, height: 25, marginLeft: 15}} />
                            </>
                        }
                    </View>
                    <View style={{flex: 1, flexShrink: 0, position: 'relative', justifyContent: 'flex-end'}}>
                        <TextInput
                            multiline
                            style={[styles.text_input, {borderWidth: 1, borderColor: appColor.line_color, color: appColor.inverseWhiteBlack}]}
                            placeholder="Message"
                            defaultValue={prompt}
                            placeholderTextColor={appColor.line_color}
                            onLayout={handleInputLayout}
                            onChangeText={(text) => {
                                dispatch(updatePromptInput(text))
                                // setPrompt(text)
                                if (text.length > 0) {
                                    set_main_icons_hidden(true)
                                }else{
                                    set_main_icons_hidden(false)
                                }
                                
                            }}
                        />
                        {
                            !main_icons_hidden && 
                            <View style={{position: 'absolute', right: 10, opacity: .6, bottom: 10}}>
                                <Icons.MicIcon style={{width: 25, height: 25, }} />
                            </View>
                        }
                        
                    </View>
                    <View  style={{flexShrink: 1, marginLeft: 20, marginBottom: 8,}}>
                        
                        {
                            main_icons_hidden ?
                            <Icons.ArrowUpIcon onPress={handleSubmitPrompt} style={{width: 25, height: 25}} />:
                            <Icons.HeadsetIcon style={{width: 25, height: 25}} />
                        }
                    </View>

                    {
                        showExpandBtn && <Icons.ExpandIcon onPress={handleOpenExpandInput} style={{width: 25, height: 25, position: 'absolute', top: 0, right: 20}} />
                    }

                </View>
            </View>
        </SafeAreaView>
    )
})

const styles = StyleSheet.create({
    text_input: {
        minHeight: 40,
        borderRadius: 20,
        width: '100%',
        paddingHorizontal: 14,
        fontSize: 20,
        maxHeight: 220
    },
    text_box_container: {
        width: '100%', 
        flexShrink: 0, 
        alignItems: 'flex-end', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
        position: 'relative',
        overflow: 'hidden'
    }
})

export default ChatPage