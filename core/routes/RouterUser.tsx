import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { RouterDrawer } from "./RouterDrawer";

const RouterStackUser = createNativeStackNavigator({
	screenOptions: {
		headerShown: false,
	},
	screens: {
		Drawer: RouterDrawer,
	},
	id: undefined,
});

export const RouterUser = createStaticNavigation(RouterStackUser);
