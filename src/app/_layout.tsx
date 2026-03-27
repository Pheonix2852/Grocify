import { ClerkProvider } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache';
import "../../globals.css";
import {KeyboardProvider} from "react-native-keyboard-controller"

import * as Sentry from '@sentry/react-native';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from "expo-router";
import { LogBox, useColorScheme } from 'react-native';

LogBox.ignoreLogs([
  "Codegen didn't run for ClerkAuthView",
  "Codegen didn't run for ClerkUserProfileView",
  "`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.",
  "`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method."
]);

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}


Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,

  integrations: [Sentry.feedbackIntegration()]
});

export default Sentry.wrap(function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <KeyboardProvider>
        <ThemeProvider value={colorScheme == "light" ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
      </KeyboardProvider>
    </ClerkProvider>
  );
});
