import * as SplashScreen from 'expo-splash-screen';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export function SplashScreenWrapper({
	children
}: { children: ReactNode; }) {
	const [appIsReady, setAppIsReady] = useState<boolean>(false);

	useEffect(() => {
		loadSplashScreen();
	}, []);

	const loadSplashScreen = async function () {
		try {
			await new Promise(resolve => setTimeout(resolve, 2000));
		} finally {
			setAppIsReady(true);
		}
	};

	const onLayoutRootView = useCallback(() => {
		if (appIsReady) SplashScreen.hide();
	}, [appIsReady]);

	if (!appIsReady) return null;

	return <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
		{children}
	</View>;
}
