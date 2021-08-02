
import button from './button'
import logo from './logo.jpeg'


export default function NavBar(){
    return(
        <>
        <img class='logo' src={logo} />
        <article>
            <button >Lentes con marcos</button>
            <button >Lentes de contactos</button>
            <button >Otros</button>
            <button >Ayuda</button>
        </article>
        </>
    )
}