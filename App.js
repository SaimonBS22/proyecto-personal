/* eslint-disable */
/* prettier-ignore */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, Pressable, SafeAreaView} from "react-native"

const header = require('./imagenes/header.jpg')
const logo = require('./imagenes/logo.jpg')
const entraña = require('./imagenes/entraña.jpg')


export default function App() {
  return(
  <SafeAreaView style={{backgroundColor: '#ab0d22'}}> 
  <View style={styles.container}>
    <Image source={header} style={styles.imagenHeader}></Image>
    <Image source={logo} style={styles.logo}></Image>
    <Pressable style={({pressed}) =>[
      styles.pressable,
    {backgroundColor: pressed ? 'black' : 'none',
      color: pressed ? 'white' : 'none'
    }
    ]}>
      <Text style={styles.texto}>Carrito</Text>
    </Pressable>
    <StatusBar style='light' />
  </View>
  <View style={styles.containerPlatos}>
    <Image source={entraña} style={styles.imagenComida}></Image>
  </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    
  },
  containerPlatos:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top: 200,
    left:100
  },
  pressable: {
    position:'absolute',
    top:19,
    right:25,
  },
  imagenHeader:{
    width:500,
    height:75,
    position:'absolute',
    top:0
  },
  logo:{
    width:50,
    height:50,
    position:'absolute',
    top:5,
    left:25,
    borderRadius:25
  },
  texto:{
    borderWidth:1,
    borderColor:'white',
    borderStyle: 'solid',
    borderRadius:5,
    color:'white',
    padding:7
  },
  imagenComida:{
    width:150,
    height:175,
    borderRadius:10
  }
});
