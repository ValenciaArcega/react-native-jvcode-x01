import { gs } from "@/core/constants/styles";
import { useAppearance } from "@/core/hooks/useAppearance";
import { wrView } from "@/core/utils/tw-ui";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image, ScrollView, Text, View } from "react-native";

export const GameDetail = function () {
	const { colorAsset } = useAppearance();

	return <View className={wrView}>
		<ScrollView style={gs.scroll}>
			<Image
				source={{ uri: "https://images.unsplash.com/photo-1735982297690-b170a1c303ff?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
				className="h-64 w-full"
			/>
			<View className="rounded-t-[22px] px-4 pt-10 pb-2 bg-white dark:bg-[#0a0a0a] w-full -mt-8">
				<Text className="text-xl font-semibold dark:text-white">
					Team 1 vs Team 2
				</Text>
				<View className="flex-row items-center mt-2">
					<FontAwesome6 name="location-arrow" size={18} color={colorAsset} />
					<Text
						numberOfLines={2}
						className="text-sm ml-3 text-green-700 dark:text-green-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel quo voluptate eligendi?
					</Text>
				</View>
			</View>
			<View>
				{/* Map */}
			</View>
		</ScrollView>
	</View>;
};
