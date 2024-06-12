import React from "react";
import { View, Text, ViewStyle} from "react-native";
import Icons from "../assets/icons";
import useAppColor from "../themed/appColor";
import { IListItemProp, TMessageSender } from "./types";
import Markdown from 'react-native-markdown-display';

export const MessageBox = React.memo((props: {message: string, sender: TMessageSender, style?: ViewStyle}) => {
    const appColor = useAppColor()
    return (
        <View key={Math.floor(Math.random() * 999999999).toString()} style={[{width: '100%', flexDirection: 'row', marginBottom: 20, justifyContent: props.sender == 'user' ? 'flex-end' : 'flex-start'}, props.style]}>
            {
                props.sender !== 'user' &&
                <View style={{width: 40, height: 40, marginRight: 15, borderRadius: 60, alignItems: 'center', justifyContent: 'center', borderColor: appColor.line_color, borderWidth: 1}}>
                    <Icons.OpenAIIcon style={{width: 25, height: 25}} />
                </View>
            }
            <View style={{backgroundColor: props.sender == 'user' ? appColor.highlight_bg : 'transparent', paddingHorizontal: 10, borderRadius: 10, maxWidth: props.sender == 'user' ? '70%' : '80%' }}>
                <Markdown style={{
                    body: {fontSize: 18, lineHeight: 25, /**----->>>> Added after the tutorial */ color: appColor.bold_text /** Added after the tutorial <<<<------*/},
                    code_block: {
                        backgroundColor: appColor.highlight_bg,
                        borderWidth: 0,
                    }
                    }}>{props.message}</Markdown>
            </View>
        </View>
    )
})

export const ListContainer = React.memo((props: {style?: ViewStyle; children: any}) => {
    const appColor = useAppColor()
    return (
        <View style={[{backgroundColor: appColor.settings_list_bg, borderRadius: 10}, props.style]}>
            {props.children}
        </View>
    )
})

export const ListItem = React.memo((props: IListItemProp) => {
    const appColor = useAppColor()
    return (
        <View onTouchEnd={props.onPress} style={[{flexDirection: 'row', alignItems: 'center',}, props.style]}>
            <View style={{margin: 15,}}>{props.icon}</View>
            <View style={[{flex: 1, borderBottomColor: appColor.line_color, borderBottomWidth: .5, paddingVertical: 15, flexDirection: 'row', paddingRight: 10, justifyContent: 'space-between'}, props.subContentStyle]}>
                <View><Text style={{fontSize: 18, color: appColor.bold_text}}>{props.title}</Text></View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, color: appColor.text_color}}>{props.label}</Text>
                    {
                        props.hasPage &&
                        <Icons.AngleRightIcon style={{width: 30, height: 30, opacity: .6, marginLeft: 10}} />
                    }
                </View>
            </View>
        </View>
    )
})