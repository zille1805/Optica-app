
import stayled from 'stayled-components'

const BottonStayled = Stayled.Button`
  padding: 0.8rem;
`



export default function Button (props){
    return(
        <>
        <BottonStayled ></BottonStayled>
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