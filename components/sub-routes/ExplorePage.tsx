import React from "react";
import { View } from "react-native";
import CustomView from "../../themed/CustomView";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import useAppColor from "../../themed/appColor";
import { useAppDispatch } from "../../shared/hooks";
import { setActiveDrawerRoute } from "../../shared/rdx-slice";
import { useIsFocused } from "@react-navigation/native"; // added after the tutorial

const ExplorePage = React.memo((props: any) => {
    const appColor = useAppColor()
    const dispatch = useAppDispatch()
    const isFocused = useIsFocused() // added after the tutorial

    // Added after the tutorial
    React.useEffect(() => {
        if (isFocused) {
            dispatch(setActiveDrawerRoute("explorepage"))            
        }
    }, [isFocused])


    return (
        <>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingLeft: 20, paddingTop: 10, flexGrow: 0, backgroundColor: appColor.main_bg}}>
            <View style={{backgroundColor: appColor.bold_text, paddingHorizontal: 15, marginRight: 10, paddingVertical: 10, borderRadius: 50}}>
                <Text style={{color: appColor.inverseBlackWhite, fontSize: 18, fontWeight: '500'}}>Top Picks</Text>
            </View>
            <View style={{backgroundColor: appColor.line_color, paddingHorizontal: 15, marginRight: 10, paddingVertical: 10, borderRadius: 50}}>
                <Text style={{color: appColor.bold_text, fontSize: 18, fontWeight: '500'}}>Writing</Text>
            </View>
            <View style={{backgroundColor: appColor.line_color, paddingHorizontal: 15, marginRight: 10, paddingVertical: 10, borderRadius: 50}}>
                <Text style={{color: appColor.bold_text, fontSize: 18, fontWeight: '500'}}>Production</Text>
            </View>
            <View style={{backgroundColor: appColor.line_color, paddingHorizontal: 15, marginRight: 10, paddingVertical: 10, borderRadius: 50}}>
                <Text style={{color: appColor.bold_text, fontSize: 18, fontWeight: '500'}}>Research</Text>
            </View>
            <View style={{backgroundColor: appColor.line_color, paddingHorizontal: 15, marginRight: 10, paddingVertical: 10, borderRadius: 50}}>
                <Text style={{color: appColor.bold_text, fontSize: 18, fontWeight: '500'}}>Productivity</Text>
            </View>
            <View style={{backgroundColor: appColor.line_color, paddingHorizontal: 15, marginRight: 10, paddingVertical: 10, borderRadius: 50}}>
                <Text style={{color: appColor.bold_text, fontSize: 18, fontWeight: '500'}}>Research & Analysis</Text>
            </View>
            <View style={{backgroundColor: appColor.line_color, paddingHorizontal: 15, marginRight: 10, paddingVertical: 10, borderRadius: 50}}>
                <Text style={{color: appColor.bold_text, fontSize: 18, fontWeight: '500'}}>Education</Text>
            </View>
            <View style={{backgroundColor: appColor.line_color, paddingHorizontal: 15, marginRight: 10, paddingVertical: 10, borderRadius: 50}}>
                <Text style={{color: appColor.bold_text, fontSize: 18, fontWeight: '500'}}>Lifestyle</Text>
            </View>
            <View style={{backgroundColor: appColor.line_color, paddingHorizontal: 15, marginRight: 10, paddingVertical: 10, borderRadius: 50}}>
                <Text style={{color: appColor.bold_text, fontSize: 18, fontWeight: '500'}}>Programming</Text>
            </View>
        </ScrollView>
        <CustomView>

            <View style={{padding: 20}}>

                <View style={{marginBottom: 10}}>
                    <Text style={{fontSize: 25, fontWeight: '600'}}>Featured</Text>
                </View>
                <View style={{marginBottom: 10}}>
                    <Text style={{fontSize: 18, color: appColor.text_color,}}>Curated top picks from this week</Text>
                </View>
                
                <View style={{marginBottom: 8}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: appColor.highlight_bg, borderRadius: 10}}>
                        <View style={{width: 70, height: 70, margin: 15, borderRadius: 90, backgroundColor: 'lime'}}>
                        </View>
                        <View style={{width: '70%'}}>
                            <View><Text style={{fontSize: 20, marginBottom: 8, fontWeight: 500, color: appColor.bold_text}}>Video GPT by VEED</Text></View>
                            <View  style={{marginBottom: 8,}}>
                                <Text style={{ color: appColor.bold_text}}>
                                    AI Video Maker. Generate videos for social media - YouTube, Instagram, TikTok and ...
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: appColor.text_color}}>
                                    By veed.io
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
                
                <View  style={{marginBottom: 8}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: appColor.highlight_bg, borderRadius: 10}}>
                        <View style={{width: 70, height: 70, margin: 15, borderRadius: 90, backgroundColor: 'lime'}}>
                        </View>
                        <View style={{width: '70%'}}>
                            <View><Text style={{fontSize: 20, marginBottom: 8, fontWeight: 500, color: appColor.bold_text}}>Maths Solver</Text></View>
                            <View  style={{marginBottom: 8,}}>
                                <Text style={{ color: appColor.bold_text}}>
                                    Your advanced math solver and AI Tutor, offers step-by-step answers, and helps...
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: appColor.text_color}}>
                                    By studyx.ai
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
                
                <View  style={{marginBottom: 8}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: appColor.highlight_bg, borderRadius: 10}}>
                        <View style={{width: 70, height: 70, margin: 15, borderRadius: 90, backgroundColor: 'lime'}}>
                        </View>
                        <View style={{width: '70%'}}>
                            <View><Text style={{fontSize: 20, marginBottom: 8, fontWeight: 500, color: appColor.bold_text}}>SQL Expert</Text></View>
                            <View  style={{marginBottom: 8,}}>
                                <Text style={{ color: appColor.bold_text}}>
                                    SQL expert for optimization and queries.
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: appColor.text_color}}>
                                    By Dmitry Khanukov
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>

                <View  style={{marginBottom: 8}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: appColor.highlight_bg, borderRadius: 10}}>
                        <View style={{width: 70, height: 70, margin: 15, borderRadius: 90, backgroundColor: 'lime'}}>
                        </View>
                        <View style={{width: '70%'}}>
                            <View><Text style={{fontSize: 20, marginBottom: 8, fontWeight: 500, color: appColor.bold_text}}>Framework Finder</Text></View>
                            <View  style={{marginBottom: 8,}}>
                                <Text style={{ color: appColor.bold_text}}>
                                    Helps locate and apply frameworks to your problem
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: appColor.text_color}}>
                                    By Ethan R Mollick
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </CustomView>
        </>
    )
})

export default ExplorePage