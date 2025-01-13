import { btnBase, txtBtnBase, txtTitle, wrView } from "@/core/utils/tw-ui";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useAppearance } from "@/core/hooks/useAppearance";
import Combobox from "@/core/components/Combobox";
import { Fragment, useEffect, useState } from "react";
import { IApiResponse, ITeam } from "@/core/interfaces/IWelcome";
import { ERR_TITLE, MSG } from "@/core/constants/labels";
import { SkeletonItem } from "@/core/components/Loaders";
import { useFlow } from "@/core/hooks/useFlow";
import { ENDPOINT_TEAMS } from '@env';

export const Welcome = function () {
	const { colorAssetInverted, colorAsset } = useAppearance();
	const { flow } = useFlow();
	const [teams, setTeams] = useState<ITeam[]>([]);
	const [team, setTeam] = useState<number | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		getTeams();
	}, []);

	const getTeams = async function (): Promise<void> {
		try {
			const res = await fetch(ENDPOINT_TEAMS, {
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

	const saveTeam_onPress = async function (): Promise<void> {
		if (!team) {
			Alert.alert(ERR_TITLE, "Asegúrate de seleccionar el equipo al que perteneces para poder continuar.");
			return;
		}
		flow.navigate("Login", {
			guid: team
		});
	};

	return <View className={wrView}>
		<Image
			source={require("@/assets/images/welcome.webp")}
			className="h-[42%] w-full"
		/>

		<View className="px-4">
			<Ionicons
				name="football-outline"
				size={44}
				color={colorAsset}
				className="ml-1 mt-5"
			/>
			<Text className={txtTitle + " my-3 text-3xl"}>
				Selecciona tu equipo
			</Text>

			{isLoading
				? <Fragment>
					<SkeletonItem
						twClass="h-16 mt-3 w-full rounded-xl"
					/>
					<SkeletonItem
						twClass="h-16 mt-6 w-full rounded-full"
					/>
				</Fragment>
				: <Fragment>
					<Combobox
						iconName="color-filter-outline"
						data={teams}
						value={team}
						setValue={setTeam}
						labelField="name"
						valueField="id"
						placeholder="Lista de equipos"
					/>
					<TouchableOpacity
						onPress={saveTeam_onPress}
						className={btnBase + " mt-16 self-center"}
					>
						<MaterialIcons name="verified" size={20} color={colorAssetInverted} />
						<Text className={txtBtnBase}>
							Guardar & Ingresar
						</Text>
					</TouchableOpacity>
				</Fragment>}
		</View>
	</View>;
};
