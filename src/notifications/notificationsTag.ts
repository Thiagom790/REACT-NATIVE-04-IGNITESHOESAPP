import { OneSignal } from "react-native-onesignal";

/* OneSignal Tags are custom key/value pairs that can be used to
 * setting custom events on the OneSignal dashboard.
 */
export function tagUserEmailCreate(email: string) {
  OneSignal.User.addTag("user_email", email);
}

export function tagUserEmailRemove() {
  OneSignal.User.removeTag("user_email");
}

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Thiago",
    user_email: "teste@example.com",
  });
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.User.addTag("cart_items_count", itemsCount);
}
