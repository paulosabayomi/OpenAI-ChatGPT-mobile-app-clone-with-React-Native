import React from "react";
import { StyleSheet, Text, TextInput, View, useColorScheme } from "react-native";
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import ChatPage from "../sub-routes/ChatPage";
import Icons from "../../assets/icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExplorePage from "../sub-routes/ExplorePage";
import useAppColor from "../../themed/appColor";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { clearMessages } from "../../shared/rdx-slice";

const Drawer = createDrawerNavigator();

const Home  = React.memo((props: any) => {
    const appColor = useAppColor()
    const conversation = useAppSelector(state => state.main.messages);
    const dispatch = useAppDispatch()
    const app_color_mode = useAppSelector(state => state.main.app_mode);
    const system_color_mode = useColorScheme() || 'light';
    const current_page = useAppSelector(state => state.main.active_drawer_route)

    return (
        <Drawer.Navigator drawerContent={(drawerProps) => {
            console.log("drawerProps", Object.keys(drawerProps.descriptors));
            
            return <SafeAreaView style={{flex: 1}}>
                
                    <View style={{flexDirection: 'row', marginBottom: 10, position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
                        <TextInput 
                            style={[styles.search_box, {backgroundColor: appColor.search_box, color: appColor.text_color}]}
                            placeholder="Search" 
                        />
                        <View style={{position: 'absolute', left: 20, opacity: .5}}>
                            <Icons.SearchIcon style={{width: 25, height: 25}} />
                        </View>
                    </View>
                    <ScrollView style={{flex: 1}}>
                        <DrawerItem focused={current_page == "chatpage"} activeTintColor={appColor.bold_text} inactiveTintColor={appColor.bold_text}  activeBackgroundColor={appColor.highlight_bg} 
                            icon={() => <View style={{padding: 8, borderRadius: 30, backgroundColor: appColor.inverseWhiteBlack}}>
                                            <Icons.OpenAIIcon mode={(app_color_mode == "system" ? system_color_mode : app_color_mode) == "dark" ? "light" : "dark"} style={{width: 20, height: 20}} /></View>} 
                            onPress={() => drawerProps.navigation.navigate('ChatPage')} label={"ChatGPT"} />
                        <DrawerItem focused={current_page == "explorepage"} activeTintColor={appColor.bold_text} inactiveTintColor={appColor.bold_text} activeBackgroundColor={appColor.highlight_bg} icon={() => <View style={{padding: 8,}}><Icons.MenuCircleIcon style={{width: 20, height: 20}} /></View>} onPress={() => drawerProps.navigation.navigate('ExplorePage')} label={"Explore GPTs"} />
                    </ScrollView>
                    <View onTouchEnd={() => props.navigation.navigate('Settings')} style={{flexDirection: 'row', paddingHorizontal: 15, justifyContent:'space-between', alignItems: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: 40, height: 40, backgroundColor: 'orange', borderRadius: 9, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>P</Text>
                            </View>
                            <View style={{marginLeft: 15}}><Text style={{fontWeight: '600', fontSize: 17, color: appColor.bold_text}}>Paulos Ab</Text></View>
                        </View>
                        <View style={{opacity: .5}}>
                            <Icons.DotsIcon style={{width: 25, height: 25}} />
                        </View>
                    </View>
                </SafeAreaView>
        }} screenOptions={{
            drawerStyle: {
                width: '80%',
                backgroundColor: appColor.main_bg
            },
            headerShadowVisible: false,
            headerLeft: (headerProps) => <TouchableOpacity style={{marginLeft: 15}} onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}><Icons.MenuIcon {...headerProps} style={{width: 35, height: 35}} /></TouchableOpacity> 
        }}>
            <Drawer.Screen name="ChatPage" options={{
                headerStyle: {
                    backgroundColor: appColor.main_bg
                },
                headerTitle(props) {
                    return <View>
                                {
                                    /**Added after the tutorial */
                                    conversation.length > 0 ?
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{color: appColor.bold_text, fontSize: 18, fontWeight: '600'}}>ChatGPT</Text>
                                        <Icons.AngleRightIcon style={{marginLeft: 5, width: 20, height: 20, opacity: .6}} />
                                    </View>:
                                    <View style={{backgroundColor: 'rgba(44, 5, 92, .2)', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 12}}>
                                        <Text style={{color: '#2c055c', fontSize: 20}}>Get Plus</Text>
                                    </View>
                                }
                            </View>
                },
                headerRight: () => {
                    return <View style={{marginRight: 20, opacity: conversation.length == 0 ? .4 : 1}}>
                                <Icons.EditPenIcon onPress={() => dispatch(clearMessages())} style={{width: 22, height: 22}} />
                            </View>
                }
            }} component={ChatPage} />
            <Drawer.Screen name="ExplorePage" 
                options={{
                    /**Added after the tutorial */
                    headerStyle: {
                        backgroundColor: appColor.main_bg
                    },
                    headerTitleStyle: {
                        color: appColor.bold_text
                    },
                    /** ^^^^^^^ Added after the tutorial */
                    headerTitle: 'Explore',
                    headerRight(props) {
                        return <View style={{marginRight: 15}}>
                            <Icons.SearchIcon style={{width: 30, height: 30}} />
                        </View>
                    },
                }}
             component={ExplorePage} />
        </Drawer.Navigator>
    )
})

const styles = StyleSheet.create({
    search_box: {
        width: '90%', 
        borderRadius: 9, 
        height: 40, 
        padding: 10,
        fontSize: 20,
        paddingLeft: 35,
    }
})

export default Home