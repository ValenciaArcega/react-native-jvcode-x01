import { AvoiderKeyboard } from "@/core/components/AvoiderKeyboard";
import { ERR_TITLE } from "@/core/constants/labels";
import { REG_EMAIL } from "@/core/constants/regex";
import { useAppearance } from "@/core/hooks/useAppearance";
import { LoginProps } from "@/core/types/routes";
import { btnBase, btnTogglePass, inpIcon, labelInp, svgInp, txtBtnBase, txtTitle, wrInpIcon, wrPass, wrView } from "@/core/utils/tw-ui";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

export const Login = function ({ route }: LoginProps) {
	const props = route.params;
	const { colorAssetInverted, colorAsset, colorPlaceHolder } = useAppearance();
	console.log(process.env.ENDPOINT_TEAMS);

	const [email, setEmail] = useState<string>("");
	const [pass, setPass] = useState<string>("");
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
			<Text className="text-gray-400 mt-1 text-sm">
				Ingresa tus credenciales en WIP para poder realizar movimientos y ver el contenido.
			</Text>

			<Text className={labelInp + " mt-11"}>
				Usuario
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
			<View className={wrPass + " mt-3"}>
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
				className={btnBase}>
				<MaterialIcons name="verified" size={20} color={colorAssetInverted} />
				<Text className={txtBtnBase}>
					Entrar
				</Text>
			</TouchableOpacity>
		</AvoiderKeyboard>
	</View>;
};
