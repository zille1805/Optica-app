import ItemCount from './ItemCount.jsx'
import ItemList from './ItemList.jsx'
const ItemListConteiner =({ Greeting })=>{
    return(
        <body>
        <h3>{Greeting}</h3>
        <div>
            <ItemList/>
        </div>
        <div>
            <ItemCount InitialValue="1" Stock="6"/>
        </div>
        </body>
    )
    
}

export default ItemListConteiner