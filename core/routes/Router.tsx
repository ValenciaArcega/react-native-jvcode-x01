import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import type { StaticParamList } from '@react-navigation/native';
import { RouterDrawer } from "./RouterDrawer";

const RouterStack = createNativeStackNavigator({
	screens: {
		Drawer: {
			screen: RouterDrawer,
			options: {
				headerShown: false,
			}
		},
	},
	id: undefined,
});
/**
 * Global Configuration for create static navigation based
 * on the main root stack.
 */
declare global {
	namespace ReactNavigation {
		interface RootParamList extends StaticParamList<typeof RouterStack>, StaticParamList<typeof RouterDrawer> { }
	}
}

export const Router = createStaticNavigation(RouterStack);
