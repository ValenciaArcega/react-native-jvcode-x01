import { gs } from "../constants/styles";
import { isiOS } from "../constants/platform";
import { KeyboardAvoidingView, ScrollView, ViewStyle } from "react-native";

type AvoiderKeyboardProps = {
	children: React.ReactNode;
	offset?: number;
	isSpacing?: boolean;
	style?: ViewStyle,
};

export function AvoiderKeyboard({
	children,
	offset = 0,
	isSpacing = false,
	style
}: AvoiderKeyboardProps) {
	return <KeyboardAvoidingView
		behavior={isiOS ? "padding" : undefined}
		keyboardVerticalOffset={offset}
		className="flex-1">
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			keyboardDismissMode="on-drag"
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			keyboardShouldPersistTaps='handled'
			className={isSpacing ? "px-4" : ""}
			contentContainerStyle={[gs.scroll, { ...style }]}>
			{children}
		</ScrollView>
	</KeyboardAvoidingView>;
}
