/* eslint-disable */
/* prettier-ignore */
import Items from "./Items"

function ItemList({items}){
    return(
        <div>
             {items.map( item => <Items item={item} key={item.id}/>)}
        </div>
    )
}

export default ItemList