import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import CustomDrawer from "../components/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { navigatorDrawer } from "@utils/router-config";
import { useAppearance } from "../hooks/useAppearance";

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
			name="Some"
			component={() => <View className="flex-1 bg-indigo-100" />}
			options={{
				title: "Eventos",
				drawerIcon: ({ color, focused }) => (
					<Ionicons
						name={focused ? "earth" : "earth-outline"}
						size={22}
						color={color} />
				),
			}}
		/>
	</Drawer.Navigator>;
};
