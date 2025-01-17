import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { wrView } from "@utils/tw-ui";
import { Octicons } from "@expo/vector-icons";
import { useAppearance } from "@hooks/useAppearance";
import { gs } from "../constants/styles";

export const News = function () {
	const { colorAsset } = useAppearance();

	return <View className={wrView}>
		<FlatList
			data={[{}, {}]}
			contentInsetAdjustmentBehavior="automatic"
			style={[gs.scroll, s.scrollAdjustment]}
			ListEmptyComponent={<View className="flex-grow min-h-[90%] items-center justify-center px-8">
				<Octicons name="bookmark-slash" size={36} color={colorAsset} />
				<Text className="mt-3 text-base text-gray-400 text-center">
					¡Estas al día! No hay noticias recientes.
				</Text>
			</View>}
			renderItem={({ item }) => <TouchableOpacity
				className="h-44 w-full mt-5 py-4 px-3 rounded-3xl bg-gray-50 border-[1px] border-gray-200 dark:bg-gray900 dark:border-gray-600 flex-row"
			>
				<Image
					className="w-[42%] h-full rounded-xl"
					source={{ uri: "https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
				/>
				<View className="w[50%] pl-3 flex-shrink">
					<Text
						className="text-lg leading-6 font-semibold text-black dark:text-white"
						numberOfLines={2}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid inventore porro quibusdam perferendis.
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

const s = StyleSheet.create({
	scrollAdjustment: {
		paddingHorizontal: 12,
		paddingTop: 18,
	}
});
