/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          borderWidth: 2,
          borderColor: 'green',
        }}>
        <Text>Home Screen</Text>
        <TextInput style={{width: '100%', backgroundColor: 'red'}}></TextInput>
      </View>
    </KeyboardAvoidingView>
  );
}

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: 'transparent',
          statusBarTranslucent: true,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
