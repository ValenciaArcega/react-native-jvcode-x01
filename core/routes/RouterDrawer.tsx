import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";

export const RouterDrawer = createDrawerNavigator({
	screens: {
		Test: () => <View className="flex-1 bg-p500" />,
		Test2: () => <View className="flex-1 bg-indigo-100" />,
	}
});
