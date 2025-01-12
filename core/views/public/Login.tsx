import { LoginProps } from "@/core/types/routes";
import { wrView } from "@/core/utils/tw-ui";
import { useState } from "react";
import { View } from "react-native";

export const Login = function ({ route }: LoginProps) {
	const props = route.params;

	console.log(props.guid);

	const [email, setEmail] = useState<string | null>(null);
	const [pass, setPass] = useState<string | null>(null);

	return <View className={wrView}>

	</View>;
};
