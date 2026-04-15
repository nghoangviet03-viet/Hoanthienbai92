import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigation/MainStack";
import { CartProvider } from "./context/CartContext";
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </CartProvider>
  );
}
// export default function App() {
//   return (
//     <NavigationContainer>
//       <BottomTabs />
//     </NavigationContainer>
//   );
// }