import { btnBase, txtBtnBase, txtTitle, wrView } from "@/core/utils/tw-ui";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAppearance } from "@/core/hooks/useAppearance";
import Combobox from "@/core/components/Combobox";
import { useEffect, useState } from "react";
import { IApiResponse, ITeam } from "@/core/interfaces/IWelcome";
import { ERR_TITLE, MSG } from "@/core/constants/labels";
import { LoaderActivity } from "@/core/components/Loaders";

export const Welcome = function () {
	const { colorAsset, colorAssetInverted } = useAppearance();
	const [teams, setTeams] = useState<ITeam[]>([]);
	const [team, setTeam] = useState<number | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		getTeams();
	}, []);

	const getTeams = async function (): Promise<void> {
		try {
			const res = await fetch("https://kube.vde-suite.com/mx/dexmi/v1/sports/company/get", {
				method: "GET",
				headers: { 'DEX-KEY': 'DexRules' }
			});
			const json: IApiResponse = await res.json();

			if (json.success) {
				setTeams(json.listElementsDex);
				setIsLoading(false);
			} else {
				Alert.alert(ERR_TITLE, MSG.NO_SERVER);
			}
		} catch {
			Alert.alert(ERR_TITLE, MSG.NO_SERVER);
		}
	};

	if (isLoading) return <LoaderActivity />;

	return <View className={wrView}>
		<Image
			source={require("@/assets/images/welcome.webp")}
			className="h-[50%] w-full"
		/>

		<View className="px-4 pt-4">
			<Ionicons
				name="football-outline"
				size={44}
				color={colorAsset}
			/>
			<Text className={txtTitle + " mt-2 tracking-normal"}>
				Mi Equipo
			</Text>

			<Combobox
				iconName="color-filter-outline"
				data={teams}
				value={team}
				setValue={setTeam}
				labelField="name"
				valueField="id"
			/>
			<TouchableOpacity className={btnBase + " mt-12"}>
				<MaterialIcons name="verified" size={20} color={colorAssetInverted} />
				<Text className={txtBtnBase}>
					Guardar & Ingresar
				</Text>
			</TouchableOpacity>
		</View>
	</View>;
};
