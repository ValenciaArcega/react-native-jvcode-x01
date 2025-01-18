import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import { DrawerUser } from "./DrawerUser";
import { Notifications } from "@views/Notifications";
import { GameDetail } from "@views/games/GameDetail";

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
		GameDetail: {
			screen: GameDetail,
			options: {
				headerShown: true,
				headerBackTitle: "Partidos",
				headerTitle: "Detalle de partido",
			}
		}
	},
	id: undefined,
});

export const RouterUser = createStaticNavigation(RouterStackUser);
