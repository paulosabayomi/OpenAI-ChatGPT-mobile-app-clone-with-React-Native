import React from "react";
import { useColorScheme } from "react-native";
import colors from "./colors";
import { useAppSelector } from "../shared/hooks";

const useAppColor = () => {
    const color_mode = useColorScheme() || 'light'
    const app_mode = useAppSelector(state => state.main.app_mode)
    return colors[app_mode == "system" ? color_mode : app_mode];
}

export default useAppColor