import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { navigatorDrawer } from "@utils/router-config";
import { useAppearance } from "../hooks/useAppearance";
import { News } from "@views/News";

const Drawer = createDrawerNavigator();

export const DrawerUser = function () {
	const { isDarkMode } = useAppearance();

	return <Drawer.Navigator
		screenOptions={{
			...navigatorDrawer(isDarkMode),
		}}
		drawerContent={props => <CustomDrawer {...props} />}
	>
		<Drawer.Screen
			name="News"
			component={News}
			options={{
				title: "Noticias",
				drawerIcon: ({ color, focused }) => <Ionicons
					name={focused ? "earth" : "earth-outline"}
					size={22} color={color} />
			}}
		/>
	</Drawer.Navigator>;
};
