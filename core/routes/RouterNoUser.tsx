import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../views/public/Welcome";

const RouterStack = createNativeStackNavigator({
	screens: {
		Welcome: {
			screen: Welcome,
			options: {
				headerShown: false,
			}
		},
	},
	id: undefined,
});

export const RouterNoUser = createStaticNavigation(RouterStack);
