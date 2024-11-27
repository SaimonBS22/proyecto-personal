/* eslint-disable */
/* prettier-ignore */

import { getCategoryItems, getItems } from "../firebase/db";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { View, FlatList, Text } from "react-native";
import { useRoute } from "@react-navigation/native";



function ItemListContainer(){
    const [items, setItems] = useState([]);
    const route = useRoute()
    const { id} = route.params || {};

  useEffect(()=>{
    if(!id){
        getItems()
        .then(res => setItems(res))
    }else{
        getCategoryItems()
        .then(res => setItems(res))
    }
  })
    return(
        <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id} // Asegúrate de que cada ítem tenga un ID único
        renderItem={({ item }) => (
          <Text style={styles.itemText}>{item.name}</Text> // Ajusta según la estructura de tu ítem
        )}
      />
    </View>
    )
}

export default ItemListContainer