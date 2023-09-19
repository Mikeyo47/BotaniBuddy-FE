import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import theme from "./src/Designs/themes";

import HomePage from "./src/HomePage";
import LoginPage from "./src/LoginPage";
import LoginForm from "./src/LoginForm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: theme.colors.primary },
          }}
        >
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="MyGarden" component={MyGarden} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
