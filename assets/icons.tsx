import { ViewStyle, View, GestureResponderEvent } from 'react-native'
// @ts-ignore
import Email from './icons/dark/email.svg'
// @ts-ignore
import EmailWhite from './icons/light/email-white.svg'

// @ts-ignore
import ArrowUp from './icons/dark/arrow-up.svg'
// @ts-ignore
import ArrowUpWhite from './icons/light/arrow-up-white.svg'

// @ts-ignore
import AngleRight from './icons/dark/angle-right.svg'
// @ts-ignore
import AngleRightWhite from './icons/light/angle-right-white.svg'

// @ts-ignore
import Circle from './icons/dark/circle.svg'
// @ts-ignore
import CircleWhite from './icons/light/circle-white.svg'

// @ts-ignore
import Database from './icons/dark/database.svg'
// @ts-ignore
import DatabaseWhite from './icons/light/database-white.svg'

// @ts-ignore
import Color from './icons/dark/color.svg'
// @ts-ignore
import ColorWhite from './icons/light/color-white.svg'

// @ts-ignore
import Dots from './icons/dark/dots.svg';

// @ts-ignore
import EditPen from './icons/dark/edit-pen.svg'
// @ts-ignore
import EditPenWhite from './icons/light/edit-pen-white.svg'

// @ts-ignore
import Globe from './icons/dark/globe.svg'
// @ts-ignore
import GlobeWhite from './icons/light/globe-white.svg'

// @ts-ignore
import Headset from './icons/dark/headset.svg'
// @ts-ignore
import HeadsetWhite from './icons/light/headset-white.svg'

// @ts-ignore
import Help from './icons/dark/help.svg'
// @ts-ignore
import HelpWhite from './icons/light/help-white.svg'

// @ts-ignore
import Logout from './icons/dark/logout.svg'
// @ts-ignore
import LogoutWhite from './icons/light/logout-white.svg'

// @ts-ignore
import Mic from './icons/dark/mic.svg'
// @ts-ignore
import MicWhite from './icons/light/mic-white.svg'

// @ts-ignore
import Padlock from './icons/dark/padlock.svg'
// @ts-ignore
import PadlockWhite from './icons/light/padlock-white.svg'

// @ts-ignore
import Plus from './icons/dark/plus-dark.svg'
// @ts-ignore
import PlusWhite from './icons/light/plus.svg'

// @ts-ignore
import PlusSquare from './icons/dark/plus-square.svg'
// @ts-ignore
import PlusSquareWhite from './icons/light/plus-square-white.svg'

// @ts-ignore
import Restore from './icons/dark/restore.svg'
// @ts-ignore
import RestoreWhite from './icons/light/restore-white.svg'

// @ts-ignore
import Search from './icons/dark/search.svg'
// @ts-ignore
import SearchWhite from './icons/light/search-white.svg'

// @ts-ignore
import MenuCircle from './icons/dark/menu-circle.svg'
// @ts-ignore
import MenuCircleWhite from './icons/light/menu-circle-white.svg'

// @ts-ignore
import Menu from './icons/dark/menu.svg'
// @ts-ignore
import MenuWhite from './icons/light/menu-white.svg'

// @ts-ignore
import Times from './icons/dark/times.svg'
// @ts-ignore
import TimesWhite from './icons/light/times-white.svg'

// @ts-ignore
import Camera from './icons/dark/camera.svg'
// @ts-ignore
import CameraWhite from './icons/light/camera-white.svg'

// @ts-ignore
import Image from './icons/dark/image.svg'
// @ts-ignore
import ImageWhite from './icons/light/image-white.svg'

// @ts-ignore
import Folder from './icons/dark/folder.svg'
// @ts-ignore
import FolderWhite from './icons/light/folder-white.svg'

// @ts-ignore
import OpenAI from './icons/dark/openai.svg'
// @ts-ignore
import OpenAIWhite from './icons/light/openai-white.svg'

// @ts-ignore
import Expand from './icons/dark/expand.svg'
// @ts-ignore
import ExpandWhite from './icons/light/expand-white.svg'

import { store } from '../shared/rdx-store'
import { TColorMode } from '../shared/types'



export default {
    EmailIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <EmailWhite /> : <Email /> }
        </View>,
    ArrowUpIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <ArrowUpWhite /> : <ArrowUp /> }
        </View>,
    AngleRightIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <AngleRightWhite /> : <AngleRight /> }
        </View>,
    CircleIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <CircleWhite /> : <Circle /> }
        </View>,
    DatabaseIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <DatabaseWhite /> : <Database /> }
        </View>,
    ColorIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <ColorWhite /> : <Color /> }
        </View>,
    DotsIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            <Dots />
        </View>,
    EditPenIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <EditPenWhite /> : <EditPen /> }
        </View>,
    GlobeIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <GlobeWhite /> : <Globe /> }
        </View>,
    HeadsetIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <HeadsetWhite /> : <Headset /> }
        </View>,
    HelpIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <HelpWhite /> : <Help /> }
        </View>,
    LogoutIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <LogoutWhite /> : <Logout /> }
        </View>,
    MicIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <MicWhite /> : <Mic /> }
        </View>,
    PadlockIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <PadlockWhite /> : <Padlock /> }
        </View>,
    PlusIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <PlusWhite /> : <Plus /> }
        </View>,
    PlusSquareIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <PlusSquareWhite /> : <PlusSquare /> }
        </View>,
    RestoreIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <RestoreWhite /> : <Restore /> }
        </View>,
    SearchIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <SearchWhite /> : <Search /> }
        </View>,
    MenuCircleIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <MenuCircleWhite /> : <MenuCircle /> }
        </View>,
    MenuIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <MenuWhite /> : <Menu /> }
        </View>,
    TimesIcon: ({mode, style, onPress}: {mode?: TColorMode, style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { (mode ?? store.getState().main.app_mode) == 'dark' ? <TimesWhite /> : <Times /> }
        </View>,
    CameraIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <CameraWhite /> : <Camera /> }
        </View>,
    ImageIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <ImageWhite /> : <Image /> }
        </View>,
    FolderIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <FolderWhite /> : <Folder /> }
        </View>,
    OpenAIIcon: ({mode, style}: {style?: ViewStyle, mode?: TColorMode}) => 
        <View style={[{width: 15, height: 15}, style]}>
            { (mode ?? store.getState().main.app_mode) == 'dark' ? <OpenAIWhite /> : <OpenAI /> }
        </View>,
    ExpandIcon: ({style, onPress}: {style?: ViewStyle; onPress?: ((event: GestureResponderEvent) => void)}) => 
        <View style={[{width: 15, height: 15}, style]} onTouchEnd={onPress}>
            { store.getState().main.app_mode == 'dark' ? <ExpandWhite /> : <Expand /> }
        </View>,
}