
import ButtonBoostrap from './Button.jsx'
import Carrito from './CartWidget.jsx'
import logo from '..//componentes/img/logo.jpeg'
import ItemListConteiner from '..//componentes/ItemListConteiner'

export default function NavBar(){
    return(
        <>
        <img class='logo' src={logo} style={{ height: '200px', width: '500px'}} />
        <article>
        <Carrito />
        </article>
        <article style={{ marginTop:'10px' }}>
            <ButtonBoostrap Text= "Lentes de contacto" Variant="primary" onClick={()=>ItemListConteiner ()}/>
            <ButtonBoostrap Text= "Armazones" Variant="success"/>
            <ButtonBoostrap Text= "Cristales" Variant="warning"/>
            <ButtonBoostrap Text= "Liquidos LC" Variant="danger"/>
            <ButtonBoostrap Text= "Ayuda" Variant="info"/>
        </article>
        </>
    )
}