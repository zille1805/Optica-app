  
import { createContext, useState } from "react";

const UserContex = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    const [numberf,setNumberf]=useState()
    const [email,setEmail]=useState()

    const AgregarUsuario = (name, number, Email) =>{
        setUser(name)
        setNumberf(number)
        setEmail(Email)
    }
    const CerrarSesion = () => {
        setUser()
        setNumberf()
        setEmail()
    }
    return(
        <UserContex.Provider value={{user,numberf, email, AgregarUsuario, CerrarSesion}}>
            {children}
        </UserContex.Provider>
    )
}
export default UserContex