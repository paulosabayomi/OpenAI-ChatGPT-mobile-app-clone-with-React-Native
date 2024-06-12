import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomView from "../../themed/CustomView";
import Icons from "../../assets/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import {Camera, CameraDevice, useCameraDevice, useCameraPermission} from 'react-native-vision-camera'

const CameraPage = React.memo((props: any) => {
    const device = useCameraDevice('back') as CameraDevice;
    const permission = useCameraPermission()
    const [grantedPermission, setGrantedPermission] = React.useState<boolean>(false)

    const handleReqeustPermission = React.useCallback(async () => {
        const req_perm = await permission.requestPermission()
        setGrantedPermission(req_perm)
    }, [permission])

    React.useEffect(() => {
        handleReqeustPermission()
    }, [permission])

    return (
        <CustomView style={{backgroundColor: 'black'}}>
            <SafeAreaView>
            <View onTouchEnd={() => props.navigation.goBack()} >
                <Icons.TimesIcon style={{width: 40, height: 40}} mode="dark"  />
            </View>
            {
                (grantedPermission && device) ?
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                />:
                <View style={{marginTop: 50}}>
                    <Text style={{color: "white", fontSize: 25}}>
                        Camera device not available on this device
                    </Text>
                </View>
            }

            </SafeAreaView>
        </CustomView>
    )
})

export default CameraPage