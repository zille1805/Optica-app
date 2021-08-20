import ItemList from './ItemList.jsx'

const ItemListConteiner =({ Greeting })=>{
  
    return(
        <body>
            <h3>{Greeting}</h3>
            <div className="boody-center">
                <ItemList/>
            </div>
        </body>
    )
}
    


export default ItemListConteiner