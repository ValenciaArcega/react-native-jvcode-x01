import { txtTitle, wrView } from "@/core/utils/tw-ui";
import { Alert, Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAppearance } from "@/core/hooks/useAppearance";
import Combobox from "@/core/components/Combobox";
import { useEffect, useState } from "react";

export const Welcome = function () {
	const { colorAsset } = useAppearance();
	const [team, setTeam] = useState([]);

	useEffect(() => {
		getTeams();
	}, []);

	const getTeams = async function (): Promise<void> {
		try {

		} catch {
			Alert.alert("", "Error");
		}
	};

	return <View className={wrView}>
		<Image
			source={require("@/assets/images/welcome.webp")}
			className="h-[50%] w-full"
		/>

		<View className="px-4 pt-8">
			<Ionicons
				name="football"
				size={44}
				color={colorAsset}
			/>
			<Text className={txtTitle + " mt-1"}>
				Mi Equipo
			</Text>
			<Text className="mt-1 text-gray-400 text-base">
				Selecciona a tu equipo en Dexmi Manager.
			</Text>

			<Combobox
				iconName="color-filter-outline"
				data={[{
					EQUIPO: "America",
					GUID: 12012,
				}]}
				value={team}
				setValue={setTeam}
				labelField="EQUIPO"
				valueField="GUID"
			/>
		</View>
	</View>;
};
