


export default function Footer() {
    const link = {textDecoration: 'none', color: 'white'}
    const ul = {listStyleType: 'none', margin: '0', padding: '0'}
    const marginBottom = {marginBottom: '10px'}
    return (
        <footer className="">
            <hr className="text-white"/>
            <div className="container text-white">
                <div className="row text-center">
                    <div className="col mt-3 mb-3">
                        <h5>Ubicación</h5>
                        <a href="https://maps.app.goo.gl/zJkTTGofdyaSwscS6" target="_blank" rel="noopener noreferrer" style={link}>
                            <p className="mt-1">Estados Unidos 700<br/>San Telmo<br/>Buenos Aires<br/>Argentina</p>
                        </a>
                    </div>
                    <div className="col mt-3">
                        <h5>Horarios</h5>
                        <ul style={ul}>
                            <li>
                                <p style={marginBottom}>Lunes a Jueves 12 a 23</p>
                            </li>
                            <li>
                                <p style={marginBottom}>Viernes y Sabados 12 a 1</p>
                            </li>
                            <li>
                                <p>Domingos y Feriados 12 a 17</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col mt-3">
                        <h5>Contacto</h5>
                        <ul style={ul}>
                            <li>
                                <p style={marginBottom}><i className="bi bi-whatsapp me-1"></i>11 1234-5678</p>
                            </li>
                            <li>
                                <p style={marginBottom}><i className="bi bi-instagram me-1"></i>Restaurante</p>
                            </li>
                            <li>
                                <p><i className="bi bi-facebook me-1"></i>Restaurante</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
