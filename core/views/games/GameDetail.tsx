import { gs } from "@/core/constants/styles";
import { useAppearance } from "@/core/hooks/useAppearance";
import { btnBase, txtBtnBase, wrView } from "@/core/utils/tw-ui";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Fragment, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { BounceInDown, SlideOutDown } from "react-native-reanimated";

export const GameDetail = function () {
	const { colorAsset, colorAssetInverted } = useAppearance();
	const [isShowingMaps, setIsShowingMaps] = useState<boolean>(false);

	return <Fragment>
		<View className={wrView}>
			<ScrollView style={gs.scroll}>
				<Image
					source={{ uri: "https://images.unsplash.com/photo-1735982297690-b170a1c303ff?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
					className="h-64 w-full"
				/>
				<View className="rounded-t-[22px] px-4 pt-10 pb-2 bg-white dark:bg-[#0a0a0a] w-full -mt-8">
					<Text className="absolute text-sm font-semibold top-6 right-6 text-gray-400">
						20 km
					</Text>
					<Text className="text-xl font-semibold dark:text-white">
						Team 1 vs Team 2
					</Text>
					<View className="flex-row items-center my-3">
						<Ionicons name="location-sharp" size={16} color={colorAsset} />
						<Text
							numberOfLines={2}
							className="text-sm ml-2 text-green-700 dark:text-green-200">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel quo voluptate eligendi?
						</Text>
					</View>
					<TouchableOpacity
						onPress={() => setIsShowingMaps(true)}
						className={btnBase}>
						<FontAwesome6 name="location-arrow" size={18} color={colorAssetInverted} />
						<Text className={txtBtnBase}>
							Ver Direcciones
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					{/* Map */}
				</View>
			</ScrollView>
		</View>
		{isShowingMaps && <Animated.View
			className="h-[60%] rounded-t-3xl bg-gray-200 p-4"
			entering={BounceInDown.duration(500)}
			exiting={SlideOutDown.duration(600)}
		>
			<TouchableOpacity
				onPress={() => setIsShowingMaps(false)}
				className="absolute top-6 p-2 right-6 rounded-full items-center justify-center bg-white">
				<Ionicons name="close" size={22} color="black" />
			</TouchableOpacity>
		</Animated.View>}
	</Fragment >;
};
