/* eslint-disable */
/* prettier-ignore */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, Pressable} from "react-native";

const imagen = require('./imagenes/header.jpg')

export default function App() {
  return(
  <View style={styles.container}>
    <Image source={imagen} style={styles.imagenHeader}></Image>
    <Pressable style={({pressed}) =>[
      styles.texto,
    {backgroundColor: pressed ? 'white' : 'none'}
    ]}>
      <Text>Carrito</Text>
    </Pressable>
    <StatusBar style='light' />
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    
  },
  texto: {
    position:'absolute',
    top:25,
    right:10,
    color: 'white', 
  },
  imagenHeader:{
    width:500,
    height:75,
    position:'absolute',
    top:0
  }
});
