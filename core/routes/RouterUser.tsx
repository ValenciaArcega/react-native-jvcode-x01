import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { DrawerUser } from "./DrawerUser";

const RouterStackUser = createNativeStackNavigator({
	screenOptions: {
		headerShown: false,
	},
	screens: {
		Drawer: DrawerUser,
	},
	id: undefined,
});

export const RouterUser = createStaticNavigation(RouterStackUser);
