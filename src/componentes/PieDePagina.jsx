import pie from "../componentes/img/piedepajina.png";
import red1 from "../componentes/img/red1.png";
import red2 from "../componentes/img/red2.png";
import red3 from "../componentes/img/red3.png";
import map from "../componentes/img/map.png";


const PieDePajina = () => {

    return (
        <div id= "pie" style={{padding:"15px", marginBottom:"0px", marginTop:"100px"}}>
            <div className="list-conteiner" style={{ borderTop: "4px  solid black", height: "230px" }}>
                <div className="list-pie" style={{ marginTop: "55px", padding: "20px", marginLeft: "50px" }}>
                    <img src={map} style={{ height: '150px', width: '150px' }} />
                    <a href="https://www.google.com.ar/maps/place/Optica+Imagen/@-31.4348052,-64.1313335,19.34z/data=!4m14!1m8!3m7!1s0x9432bd24935e9eed:0xb9c657738d02c55d!2sOptica+Imagen,+Avenida+Amadeo+Sabattini,+KQH,+Provincia+de+C%C3%B3rdoba!8m2!3d-31.4346937!4d-64.1312906!11m1!2e1!3m4!1s0x9432bd24935e9eed:0xb9c657738d02c55d!8m2!3d-31.4346937!4d-64.1312906">
                        <h4>¡Direccion de la sucursal!</h4>
                    </a>
                </div>
                <h2 style={{ marginTop: "25px", padding: "20px", marginLeft: "auto" }}>Contactanos para acesorarte mejor: </h2>
                <div style={{ marginRight: "-8px", marginTop: "20px" }}>
                    <img src={pie} style={{ height: '150px', width: '150px' }} />
                </div>
                <div style={{ width: '20rem', marginTop: "47px", marginLeft: "0px", marginRight: "30px" }}>
                    <div className="list-pie">
                        <img src={red1} style={{ height: '30px', width: '30px' }} />
                        <a href="">
                            <h4> ¡Instagram Proximamente! </h4>
                        </a>
                    </div>
                    <div className="list-pie">
                        <img src={red2} style={{ height: '30px', width: '30px' }} />
                        <a href="https://www.facebook.com/%C3%93ptica-Imagen-Cordoba-100911925254446">
                            <h4> ¡Facebook! </h4>
                        </a>
                    </div>
                    <div className="list-pie">
                        <img src={red3} style={{ height: '30px', width: '30px' }} />
                        <a href="https://wa.me/543548632903">
                            <h4> ¡WhatsApp! </h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default PieDePajina