  
import { createContext, useState } from "react";

const UserContex = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    const [telefono,setTelefono]=useState()
    const [email,setEmail]=useState()

    const AgregarUsuario = (nombre, tel, Email) =>{
        setUser(nombre)
        setTelefono(tel)
        setEmail(Email)
    }
    const CerrarSesion = () => {
        setUser()
        setTelefono()
        setEmail()
    }
    return(
        <UserContex.Provider value={{user,telefono, email, AgregarUsuario, CerrarSesion}}>
            {children}
        </UserContex.Provider>
    )
}
export default UserContex