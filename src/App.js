import React, {Children, Component, useState} from 'react';
import './App.css';
import button from './componentes/button';
import NavBar from './componentes/NavBar.js'

class MyComponent extends Component{
  constructor(){
    super()
    console.log("constructor()")
    this.state={
      name: "hola"
    }
  }
  componentDidMount(){
    console.log("componentDidMount()")
  }
  componentWillUnmount(){
    console.log("componentDidUpdate()")
  }
  render(){
    return(
      <button>Soy otro boton!{this.state.name}</button>
    )
  }
}
function App() {
  const[ visible, setVisibility]=useState(true)
  const handleClick= () =>{
    setVisibility(!visible)
    
  }

  return (
    <body>
    <NavBar />
    </body>
  )
}

export default App;
