import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactElement } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export function Router() {
	return <NavigationContainer>
		<Stack.Group>
			<Stack.Screen
				name="Test"
				component={Test}
			/>
		</Stack.Group>;
	</NavigationContainer>;
}

const Test = () => <View />;