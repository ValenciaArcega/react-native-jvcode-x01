import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./core/routes/Router";

export default function App() {
  return <NavigationContainer>
    <Router />
    {/* <StatusBar
      style={!isDarkMode ? "dark" : "light"}
      backgroundColor="transparent" /> */}
  </NavigationContainer>;
}
