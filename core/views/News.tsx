import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { txtEmpty, wrEmpty, wrImgViewTxt, wrView } from "@utils/tw-ui";
import { Octicons } from "@expo/vector-icons";
import { useAppearance } from "@hooks/useAppearance";
import { gs } from "../constants/styles";
import { useFlow } from "../hooks/useFlow";
import { useLayoutEffect } from "react";
import { useUser } from "../hooks/useUser";

export const News = function () {
	const { colorAsset } = useAppearance();
	const { flow } = useFlow();
	const { user } = useUser();

	useLayoutEffect(function () {
		flow.setOptions({
			headerRight: () => <TouchableOpacity
				onPress={() => flow.navigate("Notifications")}
			>
				<Octicons name="bell" size={24} color={colorAsset} className="mr-4 rotate-6" />
			</TouchableOpacity>,
		});
	}, [flow, colorAsset]);

	return <View className={wrView}>
		<FlatList
			data={[{}]}
			contentInsetAdjustmentBehavior="automatic"
			style={[gs.scroll, s.scrollAdjustment]}
			ListEmptyComponent={<View className={wrEmpty}>
				<Octicons name="bookmark-slash" size={36} color={colorAsset} />
				<Text className={txtEmpty}>
					¡Estas al día! No hay noticias recientes.
				</Text>
			</View>}
			renderItem={({ item }) => <TouchableOpacity
				onPress={() => flow.navigate("Notifications")}
				className={wrImgViewTxt}
			>
				<Image
					className="w-[42%] h-full rounded-xl"
					source={{ uri: "https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
				/>
				<View className="w-[58%] pl-3 flex-shrink">
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
