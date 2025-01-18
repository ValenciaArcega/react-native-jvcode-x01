export const navigatorDrawer = (isDarkMode: boolean) => ({
	drawerActiveBackgroundColor: isDarkMode ? "#123206" : "#B1FF93",
	drawerActiveTintColor: isDarkMode ? "#E5FFDB" : "#144500",
	drawerInactiveTintColor: isDarkMode ? "#c5c5c5" : "#343536",
	drawerItemStyle: {
		marginTop: 16,
		borderRadius: 18,
		paddingLeft: 0,
	},
	drawerLabelStyle: {
		marginLeft: 0,
		fontSize: 16,
	},
	// header onto screens
	headerStyle: {
		backgroundColor: isDarkMode ? "#0a0a0a" : "#fff",
	},
	headerTintColor: !isDarkMode ? "#000" : "#aaa",
});
