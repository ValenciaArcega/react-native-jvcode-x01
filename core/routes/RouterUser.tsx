import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { DrawerUser } from "./DrawerUser";
import { Notifications } from "../views/Notifications";

const RouterStackUser = createNativeStackNavigator({
	screenOptions: {
		headerShown: false,
	},
	screens: {
		Drawer: DrawerUser,
		Notifications: {
			screen: Notifications,
			options: {
				headerShown: true,
				headerBackTitle: "Regresar",
				headerTitle: "Notificaciones"
			}
		},
	},
	id: undefined,
});

export const RouterUser = createStaticNavigation(RouterStackUser);
