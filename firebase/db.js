/* eslint-disable */
/* prettier-ignore */
import { getFirestore, collection, getDocs, query, where, } from "firebase/firestore";

const db = getFirestore(app);

export const getItems = async () =>{
    const querySnapshot = await getDocs(collection(db, "Menu"))
    const items = []
    
    querySnapshot.forEach((doc) => {
    items.push(doc.data())
})
return items
}

export const getCategoryItems = async (id) =>{
    const q = query(collection(db, "Menu"), where("categoria", "==", id))
    const categoryItems = []
    
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      categoryItems.push(doc.data())
    })
    return categoryItems
    }