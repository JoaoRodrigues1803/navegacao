import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MenuNav = createDrawerNavigator

import TelaJavaScript from  "./componentes/TelaJavaScript"
import TelaNode from "./componentes/TelaNode"
import TelaReact from "./componentes/TelaReact"

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Java Script" components={TelaJavaScript} />
        <MenuNav.Screen name="Node" components={TelaNode} />
        <MenuNav.Screen name="React" components={TelaReact} />
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
