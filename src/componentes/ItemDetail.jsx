

export default function IntemDetail ({ titulo, Src, detail, precio }) {
    return(
        <body>
            <img src={Src} style={{ height: '400px', width: '450px' }} />
            <h1>{titulo}</h1>
            <div>Delail ....{detail}</div>
            <p>Precio: {precio}</p>
        </body>
    )  
}