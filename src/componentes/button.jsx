
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ButtonBoostrap ({Text,Variant}){
    return(
        <>
        <Button variant={Variant} style={{ height: '50px', width: '200px'}}>{Text}</Button>{'    '}
        </>

    )
}

/* funcion alternativa para mas adelante

export default class Button2{
    render(){
        return(
        <>
        <Button ></Button>
        </>
        )
    }
}

*/