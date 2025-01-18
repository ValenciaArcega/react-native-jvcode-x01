import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { txtEmpty, txtTitle, wrEmpty, wrImgViewTxt, wrView } from "../../utils/tw-ui";
import { Fragment } from "react";
import { gs } from "@constants/styles";
import { useAppearance } from "@hooks/useAppearance";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useFlow } from "@/core/hooks/useFlow";

export const Games = function () {
	const { colorAsset } = useAppearance();
	const { flow } = useFlow();

	return <View className={wrView}>
		<FlatList
			style={gs.scrollSpaced}
			data={[{}]}
			ListEmptyComponent={<View className={wrEmpty}>
				<Ionicons name="sad-outline" size={36} color={colorAsset} />
				<Text className={txtEmpty}>
					No hay partidos programados aún.
				</Text>
			</View>}
			ListHeaderComponent={<View className="pt-8">
				<Ionicons name="game-controller-outline" size={38} color="#22c55e" className="ml-3 mb-2" />
				<Text className={txtTitle}>
					Partidos</Text>
			</View>}
			renderItem={() => <TouchableOpacity
				onPress={() => flow.navigate("GameDetail")}
				className={wrImgViewTxt}>
				<Image
					className="w-[42%] h-full rounded-xl"
					source={{ uri: "https://images.unsplash.com/photo-1735982297690-b170a1c303ff?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
				/>
				<View className="w-[58%] pl-3 flex-shrink">
					<Text
						className="text-lg leading-6 font-semibold text-black dark:text-white mt-2"
						numberOfLines={2}>
						Team 1 vs Team 2
					</Text>
					<Text
						numberOfLines={4}
						className="text-gray-400 mt-1">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quisquam autem dolor?Sapiente quisquam autem dolor?Sapiente quisquam autem dolor?
					</Text>
				</View>
			</TouchableOpacity>}
		/>
	</View>;
};
