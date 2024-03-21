import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { NotificationClickEvent, OneSignal } from "react-native-onesignal";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";

import { CartContextProvider } from "./src/contexts/CartContext";
import { useEffect } from "react";
// import {
//   tagUserEmailCreate,
//   tagUserEmailRemove,
//   tagUserInfoCreate,
// } from "./src/notifications/notificationsTag";

OneSignal.initialize("753fcff5-c74e-487f-84f5-22361d9a757d");
OneSignal.Notifications.requestPermission(true); // necessary to receive notifications

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  // Example OneSignal Tags
  // tagUserEmailCreate("test@test.com");
  // tagUserEmailRemove();
  // tagUserInfoCreate();

  // Example da utilização de botões adicionais no OneSignal
  // useEffect(() => {
  //   const handleNotificationClicked = (event: NotificationClickEvent) => {
  //     const actionId = event.result.actionId; // id do botão clicado

  //     if (actionId === "1") {
  //       console.info("Ver todos");
  //     }

  //     if (actionId === "2") {
  //       console.info("Ver pedido");
  //     }
  //   };

  //   OneSignal.Notifications.addEventListener(
  //     "click",
  //     handleNotificationClicked
  //   );

  //   return () => {
  //     OneSignal.Notifications.removeEventListener(
  //       "click",
  //       handleNotificationClicked
  //     );
  //   };
  // }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
