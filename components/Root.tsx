import React from "react";
import { Provider } from "react-redux";
import { store } from "../shared/rdx-store";
import {PaperProvider} from 'react-native-paper'
import { NavigationContainer } from "@react-navigation/native";
import App from "../App";

const RootComponent = React.memo((props: any) => {
    return (
        <Provider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <App />
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    )
})

export default RootComponent;