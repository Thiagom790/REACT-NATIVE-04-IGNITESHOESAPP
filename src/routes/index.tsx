import { useEffect, useState } from "react";
import { useTheme } from "native-base";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
  NotificationWillDisplayEvent,
  OSNotification,
  OneSignal,
} from "react-native-onesignal";

import { AppRoutes } from "./app.routes";
import { Notification } from "../components/Notification";

export function Routes() {
  const [notification, setNotification] = useState<null | OSNotification>(null);
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  useEffect(() => {
    const handleNotifications = (event: NotificationWillDisplayEvent): void => {
      event.preventDefault();
      const response = event.getNotification();
      setNotification(response);
    };

    OneSignal.Notifications.addEventListener(
      "foregroundWillDisplay",
      handleNotifications
    );

    return () =>
      OneSignal.Notifications.removeEventListener(
        "foregroundWillDisplay",
        handleNotifications
      );
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
      {notification && (
        <Notification
          data={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </NavigationContainer>
  );
}
