import React, { useCallback, useState } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useUser } from '@hooks/useUser';
import { useFocusEffect } from '@react-navigation/native';
/// import { LoaderActivity } from '@/app/components/LoaderActivity';
// import { API_URL } from '@/app/constants/variables';
// import { hapticFeedback } from '@/app/functions/haptics';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppearance } from '@hooks/useAppearance';
// import { CustomLinearGradient } from '@/app/components/Gradient';
import { separator } from '@utils/tw-ui';

function CustomDrawer(props: any) {
	const { setUser } = useUser();
	const { isDarkMode } = useAppearance();
	const [isLoading, setIsLoading] = useState(true);
	const [isSigningOut, setIsSigningOut] = useState<boolean>(false);

	// useFocusEffect(
	// 	useCallback(() => {
	// 		getData();
	// 	}, [])
	// );

	// const getData = async function () {
	// 	try {
	// 		const res = await fetch(`${API_URL}UserSystemGeneral/GetUserProfile?ID_USUARIO=${globalUser.ID_USUARIO}`);
	// 		const json = await res.json();

	// 		if (json.flag) {
	// 			setGlobalUser(json.lst);
	// 		}
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	// const signUserOut_onPress = async function () {
	// 	setIsSigningOut(true);
	// 	hapticFeedback("light");
	// 	await AsyncStorage.removeItem("HAS_SESSION");

	// 	setTimeout(function () {
	// 		setGlobalUser(null);
	// 	}, 2500);
	// };

	// if (isLoading) return <LoaderActivity />;

	return (
		<View className='flex-1 bg-white dark:bg-gray900'>
			{/* <CustomLinearGradient colors={["#91a7ff", "#4c6ef5"]} style={{ height: 112 }}>

			</CustomLinearGradient> */}
			<View
				className='p-5 pb-0 -mt-12'>
				{/* <Image
					source={globalUser.FOTO_PERFIL ? { uri: globalUser.FOTO_PERFIL } : require("@/assets/img/user-generic.png")}
					className='h-20 w-20 rounded-full mb-2'
				/>
				<Text
					numberOfLines={1}
					className=" text-xl tracking-tight text-left font-semibold text-black dark:text-white">
					{`${globalUser.NOMBRE} ${globalUser.PRIMER_AP}`}
				</Text>
				<Text className="text-gray-400 mt-1">
					{globalUser.CORREO}
				</Text> */}
			</View>

			<View className={separator + " mb-0"} />

			<DrawerContentScrollView
				{...props}>
				{/* <View style={{ flex: 1, marginTop: -36 }}> */}
				<View style={{ flex: 1, marginTop: 36 }}>
					<DrawerItemList {...props} />
				</View>
			</DrawerContentScrollView>

			<View className='p-8 pt-5 border-t-[1px] border-[#eee] dark:border-[#4a4545] bg-white dark:bg-[#131313]'>
				<TouchableOpacity
					disabled={isSigningOut}
					onPress={() => setUser(null)}
				>
					<View className='flex-row items-center'>
						{isSigningOut
							? <ActivityIndicator size="small" color="#ff6b6b" />
							: <Ionicons
								name="exit-outline"
								size={20}
								color={isDarkMode ? "#ff6b6b" : "red"} />}
						<Text
							className='text-sm text-red-500 ml-2 dark:text-red-400'>
							{isSigningOut ? "Cerrando..." : "Cerrar Sesión"}
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CustomDrawer;