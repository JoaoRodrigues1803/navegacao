import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MenuNav = createStackNavigator();

import TelaJavaScript from  "./TelaJavaScript"
import TelaNode from "./TelaNode"
import TelaReact from "./TelaReact"

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Java Script" component={TelaJavaScript} />
        <MenuNav.Screen name="Node" component={TelaNode} />
        <MenuNav.Screen name="React" component={TelaReact} />
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItens: 'center',
    justifyContent: 'center'
    },
});
