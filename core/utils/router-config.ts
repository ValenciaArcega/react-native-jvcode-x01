export const navigatorDrawer = (isDarkMode: boolean) => ({
	drawerActiveBackgroundColor: isDarkMode ? "#323b5d" : "#dbe4ff",
	drawerActiveTintColor: isDarkMode ? "#fff" : "#748ffc",
	drawerInactiveTintColor: isDarkMode ? "#c5c5c5" : "#343536",
	drawerItemStyle: {
		marginTop: 18,
		borderRadius: 18,
		paddingLeft: 6,
	},
	drawerLabelStyle: {
		marginLeft: 6
	},
	// header onto screens
	headerStyle: {
		backgroundColor: isDarkMode ? "#0a0a0a" : "#fff",
	},
	headerTintColor: !isDarkMode ? "#000" : "#aaa",
});
