import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { UserContext } from "./core/context/UserContext";
import { useAppearance } from "./core/hooks/useAppearance";
import { RootRouter } from "./core/routes/RootRouter";

export default function App() {
  const { isDarkMode } = useAppearance();

  return <UserContext>
    <StatusBar
      style={!isDarkMode ? "dark" : "light"}
      backgroundColor="transparent" />
    <RootRouter />
  </UserContext>;
}
