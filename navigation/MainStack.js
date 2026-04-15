import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import ScanScreen from "../screens/ScanScreen";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScanPreview"
        component={ScanScreen}
        options={{ headerShown: false, presentation: "card" }}
      />
    </Stack.Navigator>
  );
}
