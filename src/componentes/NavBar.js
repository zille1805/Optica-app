
import ButtonBoostrap from './button.jsx'
import Carrito from './CartWidget.jsx'
import logo from '..//componentes/img/logo.jpeg'


export default function NavBar(){
    return(
        <>
        <img class='logo' src={logo} style={{ height: '200px', width: '500px'}} />
        <article>
        <Carrito />
        </article>
        <article style={{ marginTop:'10px' }}>
            <ButtonBoostrap Text= "Lentes de contacto"/>
            <ButtonBoostrap Text= "Armazones"/>
            <ButtonBoostrap Text= "Cristales"/>
            <ButtonBoostrap Text= "Liquidos LC"/>
            <ButtonBoostrap Text= "Ayuda"/>
        </article>
        </>
    )
}