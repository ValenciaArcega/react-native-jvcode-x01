import { AvoiderKeyboard } from "@/core/components/AvoiderKeyboard";
import { useAppearance } from "@/core/hooks/useAppearance";
import { LoginProps } from "@/core/types/routes";
import { btnTogglePass, inpIcon, labelInp, svgInp, txt, txtTitle, wrInpIcon, wrPass, wrView } from "@/core/utils/tw-ui";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export const Login = function ({ route }: LoginProps) {
	const props = route.params;
	const { colorAsset, colorPlaceHolder } = useAppearance();

	const [email, setEmail] = useState<string>("");
	const [pass, setPass] = useState<string>("");
	const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

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
				Ingresa tus credenciales en Dexmi Manager para poder realizar movimientos y ver el contenido.
			</Text>

			<Text className={labelInp + " mt-11"}>
				Usuario
			</Text>
			<View className={wrInpIcon}>
				<TextInput
					value={email}
					onChangeText={setEmail}
					className={inpIcon}
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
						onChangeText={setPass}
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
		</AvoiderKeyboard>
	</View>;
};
