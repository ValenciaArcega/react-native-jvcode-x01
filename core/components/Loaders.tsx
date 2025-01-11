import { ActivityIndicator, View } from "react-native";
import { useAppearance } from "@hooks/useAppearance";
import React, { useEffect } from 'react';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
	withSequence,
} from 'react-native-reanimated';

export function LoaderActivity() {
	const { colorAsset } = useAppearance();

	return <View className="flex-1 items-center justify-center bg-white dark:bg-[#0A0A0A]">
		<ActivityIndicator size="large" color={colorAsset} />
	</View>;
}

export const SkeletonItem = ({ twClass }: { twClass: string; }) => {
	const opacity = useSharedValue(0.3);
	const { isDarkMode } = useAppearance();

	useEffect(() => {
		opacity.value = withRepeat(
			withSequence(
				withTiming(1, { duration: 1000 }),
				withTiming(0.4, { duration: 1000 })
			),
			-1,
			true
		);
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
	}));

	return (
		<Animated.View
			style={[
				{
					backgroundColor: isDarkMode ? "#343a40" : '#E1E9EE',
					borderRadius: 8,
					alignSelf: "center",
				},
				animatedStyle,
			]}
			className={twClass}
		/>
	);
};
