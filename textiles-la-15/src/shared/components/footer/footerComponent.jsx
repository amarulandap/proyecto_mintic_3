import React, { Fragment } from 'react'
import footerStyles from './footerStyles.css'

const FooterComponent = () => {

    return (
        <Fragment>
            <div id="footer">
                <div className="container">
                    <div className="row">

                    </div>
                </div>
            </div>
            <div id="pie-footer">
                <div id="fondo-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="titulo-footer">
                                CONTACTO:
                                Teléfono: 604 - 1 23 45 67 <br />
                                NUESTRAS SEDES: <br />
                                Dirección: Calle falsa 123, Medelín - Colombia <br />
                                Dirección: Av. Siempre viva 745, Arauca - Colombia <br />
                                Dirección: Av. Revolución, Bogotá - Colombia <br />
                                Todos los derechos reservados 2021.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FooterComponent;
