import { AvoiderKeyboard } from "@/core/components/AvoiderKeyboard";
import { ERR_TITLE, MSG } from "@/core/constants/labels";
import { REG_EMAIL } from "@/core/constants/regex";
import { useAppearance } from "@/core/hooks/useAppearance";
import { useUser } from "@/core/hooks/useUser";
import { IApiResponse } from "@/core/interfaces/IWelcome";
import { LoginProps } from "@/core/types/routes";
import { btnBase, btnTogglePass, inpIcon, labelInp, svgInp, txtBtnBase, txtTitle, wrInpIcon, wrPass, wrView } from "@/core/utils/tw-ui";
import { ENDPOINT_LOGIN, LOGIN_PASS, LOGIN_USER } from "@env";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { Fragment, useState } from "react";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export const Login = function ({ route }: LoginProps) {
	const props = route.params;
	const { colorAssetInverted, colorAsset, colorPlaceHolder } = useAppearance();
	const { setUser } = useUser();

	const [email, setEmail] = useState<string>(LOGIN_USER);
	const [pass, setPass] = useState<string>(LOGIN_PASS);
	const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
	const [isValidating, setIsValidating] = useState<boolean>(false);

	const login_onPress = async function (): Promise<void> {
		try {
			if (!email || !email.trim()) {
				Alert.alert(ERR_TITLE, "Asegúrate de ingresar tu correo electrónico para poder continuar.");
				return;
			} else if (!email.match(REG_EMAIL)) {
				Alert.alert(ERR_TITLE, "Asegúrate de ingresar un formato de correo válido.");
				return;
			}

			if (!pass || !pass.trim()) {
				Alert.alert(ERR_TITLE, "Asegúrate de ingresar tu contraseña para poder continuar.");
				return;
			}
			setIsValidating(true);

			const options = {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					"DEX-KEY-ENV": props.teamID,
					"DEX-CHANNEL": "AppMovil"
				},
				body: JSON.stringify({
					Login: [{
						user: email,
						password: pass
					}]
				})
			};
			const request = await fetch(`${ENDPOINT_LOGIN}`, options);
			const json = await request.json();

			if (json.success) {
				setUser({
					GUID: json.listElementsDex[0].guid,
					GUID_TEAM: props.teamID
				});
			}
			else if (json.message) Alert.alert(ERR_TITLE, json.message);
		} catch {
			Alert.alert(ERR_TITLE, MSG.NO_SERVER);
		} finally {
			setIsValidating(false);
		}
	};

	const setEmail_onChangeText = (v: string): void => {
		if (v.includes(" ")) return;
		setEmail(v.toLocaleLowerCase());
	};

	const setPass_onChangeText = (v: string): void => {
		if (v.includes(" ")) return;
		setPass(v);
	};

	return <View className={wrView}>
		<AvoiderKeyboard isSpacing>
			<Octicons
				name="sign-in"
				size={44}
				color={colorAsset}
				className="ml-3 mt-16 mb-5"
			/>
			<Text className={txtTitle}>
				Inicia Sesión
			</Text>
			<Text className="text-gray-400 mt-1 text-sm mb-4">
				Ingresa tus credenciales en WIP para poder realizar movimientos y ver el contenido.
			</Text>

			<Text className={labelInp}>
				Usuario en {props.teamName}
			</Text>
			<View className={wrInpIcon}>
				<TextInput
					value={email}
					onChangeText={setEmail_onChangeText}
					className={inpIcon}
					autoCapitalize="none"
					keyboardType="email-address"
					placeholder="Ingresa tu usuario"
					placeholderTextColor={colorPlaceHolder}
				/>
				<Octicons
					name="mention"
					size={18}
					className={svgInp}
					color={colorAsset} />
			</View>
			<Text className={labelInp + " mt-4"}>
				Contraseña
			</Text>
			<View className={wrPass}>
				<View className={wrInpIcon + " w-[82%]"}>
					<TextInput
						value={pass}
						onChangeText={setPass_onChangeText}
						secureTextEntry={!isPassVisible}
						className={inpIcon}
						keyboardType="email-address"
						placeholder="Ingresa tu contraseña"
						placeholderTextColor={colorPlaceHolder}
					/>
					<Octicons
						name="lock"
						size={20}
						className={svgInp}
						color={colorAsset} />
				</View>
				<TouchableOpacity
					onPress={() => setIsPassVisible(!isPassVisible)}
					className={btnTogglePass}>
					<Octicons
						name={isPassVisible ? "eye-closed" : "eye"}
						size={26} color={colorAsset} />
				</TouchableOpacity>
			</View>

			<TouchableOpacity
				disabled={isValidating}
				onPress={login_onPress}
				className={btnBase + " mt-[48px] self-center w-[66%]"}>
				{isValidating
					? <ActivityIndicator size="small" color={colorAssetInverted} />
					: <Fragment>
						<Ionicons name="log-in-outline" size={22} color={colorAssetInverted} />
						<Text className={txtBtnBase}>
							Entrar con {props.teamName}
						</Text>
					</Fragment>}
			</TouchableOpacity>
		</AvoiderKeyboard>
	</View>;
};
