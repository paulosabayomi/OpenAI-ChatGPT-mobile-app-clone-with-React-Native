/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import RootComponent from './components/Root';

AppRegistry.registerComponent(appName, () => RootComponent);
