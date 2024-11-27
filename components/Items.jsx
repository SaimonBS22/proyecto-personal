/* eslint-disable */
/* prettier-ignore */

function Items({item}){
    return(
        <div>
            <img src={item.Imagen} />
            <h2>{item.Nombre}</h2>
        </div>
    )
}

export default Items