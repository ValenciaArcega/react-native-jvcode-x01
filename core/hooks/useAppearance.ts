import { useColorScheme } from "react-native";

export function useAppearance() {
	const colorScheme = useColorScheme();
	const isDarkMode = colorScheme == "dark" ? true : false;
	const colorAsset = isDarkMode ? "#fff" : "#000";
	const colorAssetInverted = isDarkMode ? "#000" : "#fff";
	const colorPlaceHolder = isDarkMode ? "#333" : "#ccc";

	return {
		isDarkMode,
		colorAsset,
		colorAssetInverted,
		colorPlaceHolder,
	};
}
