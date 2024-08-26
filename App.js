import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createButtomTabsNabigator} from "@react-navigation/bottom-tabs";

const MenuNav = createButtomTabsNabigator

import TelaJavaScript from  "./TelaJavaScript"
import TelaNode from "./TelaNode"
import TelaReact from "./TelaReact"

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
