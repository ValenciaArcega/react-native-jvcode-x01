import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { UserContext } from "./core/context/UserContext";
import { useAppearance } from "./core/hooks/useAppearance";
import { RootRouter } from "./core/routes/RootRouter";
import { SplashScreenWrapper } from "./core/components/SplashScreen";

export default function App() {
  const { isDarkMode } = useAppearance();

  return <SplashScreenWrapper>
    <UserContext>
      <StatusBar
        style={!isDarkMode ? "dark" : "light"}
        backgroundColor="transparent" />
      <RootRouter />
    </UserContext>
  </SplashScreenWrapper>;
}
