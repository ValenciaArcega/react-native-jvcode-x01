import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "@components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { navigatorDrawer } from "@utils/router-config";
import { useAppearance } from "@hooks/useAppearance";
import { News } from "@views/News";
import { Games } from "@/core/views/games/Games";

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
					name={focused ? "reader" : "reader-outline"}
					size={25} color={color} />
			}}
		/>
		<Drawer.Screen
			name="Some"
			component={Games}
			options={{
				title: "Partidos",
				headerTitle: "",
				drawerIcon: ({ color, focused }) => <Ionicons
					name={focused ? "football" : "football-outline"}
					size={25} color={color} />
			}}
		/>
	</Drawer.Navigator>;
};
