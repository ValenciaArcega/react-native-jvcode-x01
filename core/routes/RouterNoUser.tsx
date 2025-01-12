import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome } from "../views/public/Welcome";
import { Login } from "../views/public/Login";

const RouterStackNoUser = createNativeStackNavigator({
	initialRouteName: "Login",
	screenOptions: {
		headerShown: false
	},
	screens: {
		Welcome: Welcome,
		Login: Login,
	},
	id: undefined,
});

export const RouterNoUser = createStaticNavigation(RouterStackNoUser);
