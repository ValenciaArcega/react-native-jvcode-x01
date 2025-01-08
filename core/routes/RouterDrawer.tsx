import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";

export const RouterDrawer = createDrawerNavigator({
	screens: {
		Test: () => <View />,
		Test2: () => <View />,
	}
});
