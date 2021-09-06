import ItemList from './ItemList.jsx';
import { useContext } from "react";
import { ThemeContext } from "./contex/Themecontext";

const ItemListConteiner =({ Greeting })=>{
    const { isDark, setIsDark } = useContext(ThemeContext);
    return(
        <body style={{ background: isDark ? "black" : "white", color: isDark ? "white" : "black"}}>
            <h3>{Greeting}</h3>
            <div className="boody-center">
                <ItemList/>
            </div>
        </body>
    )
}
    


export default ItemListConteiner