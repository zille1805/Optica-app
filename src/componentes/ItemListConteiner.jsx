import ItemCount from './ItemCount.jsx'

const ItemListConteiner =({ Greeting })=>{
    return(
        <>
        <h3>{Greeting}</h3>
        <div>
            <h3>Lentes de contacto h2</h3>
            <ItemCount InitialValue="1" Stock="6"/>
        </div>
        </>
    )
    
}

export default ItemListConteiner