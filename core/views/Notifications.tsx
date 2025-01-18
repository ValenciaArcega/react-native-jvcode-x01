import { FlatList, Text, View } from "react-native";
import { txtTitle, wrView } from "../utils/tw-ui";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAppearance } from "../hooks/useAppearance";
import { Fragment } from "react";
import { gs } from "../constants/styles";

export const Notifications = function () {
	const { colorAsset } = useAppearance();

	return <View className={wrView}>
		<FlatList
			data={[]}
			style={gs.scrollSpaced}
			contentInsetAdjustmentBehavior="automatic"
			ListHeaderComponent={() => <MaterialCommunityIcons name="bell-ring-outline"
				size={44}
				color={colorAsset}
				className="rotate-12 mt-16 mb-0"
			/>}
			renderItem={() => <Fragment></Fragment>}
		/>
	</View>;
};
