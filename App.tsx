
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  View,
  useColorScheme,
} from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Home from './components/routes/Home';
import SettingsRoute from './components/routes/Settings';
import useAppColor from './themed/appColor';
import Icons from './assets/icons';
import CameraPage from './components/routes/Camera';
import storage from './shared/storage';
import { APP_COLOR_MODE_KEY } from './assets/constants';
import { useAppDispatch, useAppSelector } from './shared/hooks';
import { setAppColorMode } from './shared/rdx-slice';
import InputRoute from './components/routes/InputRoute';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const appColor = useAppColor();
  const dispatch = useAppDispatch();
  const app_color_mode = useAppSelector(state => state.main.app_mode)
  const system_color_mode = useColorScheme() || 'light'


  const handleSetColorMode = React.useCallback(() => {
    storage.load({key: APP_COLOR_MODE_KEY})
    .then((data: any) => {
      console.log("data data", data);
      dispatch(setAppColorMode(data))
    })
    .catch((err: any) => {
      dispatch(setAppColorMode("system"))
    })
  }, [])

  React.useLayoutEffect(() => {
    handleSetColorMode()
  }, [])

  return (
    <>
      <StatusBar
        barStyle={(app_color_mode == "system" ? system_color_mode : app_color_mode) == 'light' ? 'dark-content' : 'light-content'}
      />

    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Stack.Screen name="Settings" 
        options={{
          presentation: 'modal',
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: appColor.page_modal_bg
          },
          headerShadowVisible: false,
          
        }} 
        component={SettingsRoute} />
      <Stack.Screen name="Camera" 
        options={{presentation: 'card', 
        cardStyle: {
          height: "50%"
        },
        headerShown: false,
        gestureDirection: "vertical",
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }} 
        component={CameraPage} />
      <Stack.Screen name="InputRoute" component={InputRoute} 
        options={{
          headerShown: false,
          presentation: 'modal'
        }}
      />
    </Stack.Navigator>
    </>
  );
}


export default App;
