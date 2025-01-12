import { Text, View } from "react-native";
import { txtTitle, wrView } from "../utils/tw-ui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppearance } from "../hooks/useAppearance";
import { gs } from "../constants/styles";

export const Notifications = function () {
	const { colorAsset } = useAppearance();

	return <View className={wrView}>
		<MaterialCommunityIcons name="bell-ring-outline"
			size={44}
			color={colorAsset}
			className="rotate-12"
		// style={gs.iconHeader}
		/>
		<Text className={txtTitle}>
			Notificaciones
		</Text>
	</View>;
};
