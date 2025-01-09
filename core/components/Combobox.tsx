import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons } from "@expo/vector-icons";
// import { appColors } from "../constants/colors";
import { useAppearance } from "@hooks/useAppearance";

type DropDownListProps = {
	data: object[];
	value: any;
	setValue: (value: any) => void;
	placeholder?: string,
	search?: boolean,
	valueField: string,
	labelField: string,
	iconName?: keyof typeof Ionicons.glyphMap,
	style?: object;
};

export default function Combobox({
	data,
	value,
	setValue,
	placeholder = "Selecciona una opción",
	search = false,
	valueField,
	labelField,
	iconName = "albums-outline",
	style,
}: DropDownListProps) {
	const mappedData = data.map(item => ({
		value: item[valueField],
		label: item[labelField]
	}));
	const { isDarkMode, colorAsset } = useAppearance();

	return (
		<Dropdown
			style={[styles.dropdown, { backgroundColor: isDarkMode ? "#212529" : "#f2f2f7", ...style }]}
			placeholderStyle={styles.placeholderStyle}
			selectedTextStyle={[styles.selectedTextStyle, {
				color: isDarkMode ? "#96f2d7" : "#099268",
			}]}
			selectedTextProps={{
				numberOfLines: 1,
			}}
			inputSearchStyle={styles.inputSearchStyle}
			itemTextStyle={styles.itemTextStyle}
			itemContainerStyle={styles.itemContainerStyle}
			iconStyle={styles.iconExpandStyle}
			containerStyle={styles.containerStyle}
			showsVerticalScrollIndicator={false}
			maxHeight={300}
			autoScroll={false}
			dropdownPosition="bottom"
			searchPlaceholder="Buscar..."
			renderLeftIcon={() => (
				<Ionicons
					style={styles.icon}
					color={colorAsset}
					name={iconName} size={24} />
			)}
			data={mappedData}
			search={search}
			valueField="value"
			labelField="label"
			placeholder={placeholder}
			value={value}
			onChange={(item) => setValue(item.value)}
			renderItem={(item) => (
				<View style={[styles.item]}>
					<Text style={styles.textItem}>
						{item.label}
					</Text>
					{item.value === value && (
						<Ionicons name="checkmark-circle" size={24} color="#89BE2B" />
					)}
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	dropdown: {
		height: 54,
		width: "100%",
		marginTop: 6,
		borderRadius: 12,
		paddingHorizontal: 16,
	},
	containerStyle: {
		borderRadius: 12,
		color: 'black',
	},
	itemContainerStyle: {
		borderRadius: 0,
		color: '#000',
	},
	itemTextStyle: {
		color: 'black',
	},
	icon: {
		marginRight: 12,
	},
	item: {
		padding: 17,
		paddingVertical: 16,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: '#000',
		borderBottomColor: "#eee",
		borderBottomWidth: 1,
	},
	textItem: {
		flex: 1,
		fontSize: 16,
		color: '#000',
	},
	placeholderStyle: {
		fontSize: 16,
		color: 'gray',
	},
	selectedTextStyle: {
		fontSize: 14,
		lineHeight: 40,
	},
	iconExpandStyle: {
		width: 28,
		height: 28,
	},
	inputSearchStyle: {
		fontSize: 17,
		paddingHorizontal: 12,
		borderRadius: 12,
		color: '#000',
	},
});
