import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

const RouterStack = createNativeStackNavigator({
	screens: {
		Welcome: () => <View />
	},
	id: undefined,
});

export const RouterNoUser = createStaticNavigation(RouterStack);
