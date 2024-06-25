import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet,  } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Lista from "./src/c/lista/"
import PagMusic from "./src/c/pagMusic"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer independent={true}>

      <Stack.Navigator>

      <Stack.Screen name = "Musicas" component={Lista}
      options={{
        headerStyle: {
          backgroundColor: 'dimgray', // Define a cor de fundo do cabeçalho
          height: 100,
        },
        headerTintColor: 'black', // Define a cor do texto do cabeçalho
        headerTitleStyle: {
          fontWeight: 'bold', // Define o estilo do título do cabeçalho
        },
      }}/>
      <Stack.Screen name = "PagMusic" component={PagMusic}
      options={{
        headerStyle: {
          backgroundColor: 'dimgray', // Define a cor de fundo do cabeçalho
          height: 100,
        },
        headerTintColor: 'black', // Define a cor do texto do cabeçalho
        headerTitleStyle: {
          fontWeight: 'bold', // Define o estilo do título do cabeçalho
        },
      }}/>

      </Stack.Navigator>
      
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    
  },

})