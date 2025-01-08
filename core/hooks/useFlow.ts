import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
/**
 * Navigate to a nested route
 * navReplace.replace("BottomHolder", {
		screen: 'RouterHolderHub',
		params: {
			screen: 'HubTenedor'
		}
	})
 */
export function useFlow() {
	const flow: NavigationProp<ParamListBase> = useNavigation();
	const flowReplace = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	return { flow, flowReplace };
}
