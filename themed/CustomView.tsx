import React from "react";
import { ScrollView, ViewStyle } from "react-native";
import useAppColor from "./appColor";

const CustomView = React.memo((props: {style?: ViewStyle, children: any}) => {
    const appColor = useAppColor()
    return (
        <ScrollView style={[{flex: 1, backgroundColor: appColor.main_bg}, props.style]}
        contentContainerStyle={{justifyContent:'center'}}>
            {props.children}
        </ScrollView>
    )
})

export default CustomView