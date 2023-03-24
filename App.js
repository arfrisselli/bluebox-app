const Stack = createNativeStackNavigator();
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import loginScreen from './screens/loginScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Ubuntu: require('./assets/fonts/Ubuntu.ttf'),
    Ubuntu_light: require('./assets/fonts/Ubuntu_light.ttf'),
    Ubuntu_regular: require('./assets/fonts/Ubuntu_regular.ttf'),
    Ubuntu_medium: require('./assets/fonts/Ubuntu_medium.ttf'),
    Ubuntu_bold: require('./assets/fonts/Ubuntu_bold.ttf'),
    'Open Sans': require('./assets/fonts/Open_Sans.ttf'),
    'Open Sans_semibold': require('./assets/fonts/Open_Sans_semibold.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="loginScreen"
              component={loginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
