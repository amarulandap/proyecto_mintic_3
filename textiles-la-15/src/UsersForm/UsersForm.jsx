import React, {Fragment} from "react";
import './UsersFormStyles.css';

function UsersInfo (){
    let identificationNumber = document.getElementById("txtIdFormulario").value;
    let userName = document.getElementById("txtPrimerNombre").value;
    let userSecondName = document.getElementById("txtSegundoNombre").value;
    let userFirstLastName = document.getElementById("txtPrimerApellido").value;
    let userSecondLastName = document.getElementById("txtSegundoApellido").value;
    let houseAddress = document.getElementById("txtDireccionDomicilio").value;
    let phoneNumber = document.getElementById("txtTelefonoFijo").value;
    let celNumber = document.getElementById("txtTelefonoCelular").value;
    let inputDate = document.getElementById("fechaIngreso").value;

    let user = {
        "id": identificationNumber,
        "firstName": userName,
        "secondName": userSecondName,
        "firstLastName": userFirstLastName,
        "secondLastName": userSecondLastName,
        "direction": houseAddress,
        "phone": phoneNumber,
        "celphone": celNumber,
        "date": inputDate,
    }

    console.log(user);
}

function UsersForm (){

    return (
        <Fragment>
            <div>
                <form className="col-6 col-sm-6 col-md-6 col-lg-6 col-lx-6 col-xxl-6 style_form_users">
                    <h1 className="title_form">
                        Formulario de Registro y actualización de datos
                    </h1>
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-lx-6 col-xxl-6">
                            <label for="txtIdFormulario" className="form-label">
                                Número de Documento
                            </label>
                            <input type="text" className="form-control" id="txtIdFormulario" placeholder="Ingrese su número de identificación" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="txtPrimerNombre" className="form-label">
                                Primer Nombre
                            </label>
                            <input type="text" className="form-control" id="txtPrimerNombre" placeholder="Ingrese su primer Nombre" />
                        </div>
                        <div className="col">
                            <label for="txtSegundoNombre" className="form-label">
                                Segundo Nombre
                            </label>
                            <input type="text" className="form-control" id="txtSegundoNombre" placeholder="Ingrese su segundo Nombre" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="txtPrimerApellido" className="form-label">
                                Primer Apellido
                            </label>
                            <input type="text" className="form-control" id="txtPrimerApellido" placeholder="Ingrese su primer Apellido" />
                        </div>
                        <div className="col">
                            <label for="txtSegundoApellido" className="form-label">
                                Segundo Apellido
                            </label>
                            <input type="text" className="form-control" id="txtSegundoApellido" placeholder="Ingrese su segundo Apellido" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="txtDireccionDomicilio" className="form-label">Dirección de domicilio</label>
                            <input type="text" className="form-control" id="txtDireccionDomicilio" placeholder="Ingrese su domicilio actual" />
                        </div>   
                    </div>
                     <div className="row">
                        <div className="col">
                            <label for="txtTelefonoFijo" className="form-label">
                                Teléfono Fijo
                            </label>
                            <input type="text" className="form-control" id="txtTelefonoFijo" placeholder="Ingrese su número telefónico" />
                        </div>
                        <div className="col">
                            <label for="txtTelefonoCelular" className="form-label">
                                Teléfono Celular
                            </label>
                            <input type="text" className="form-control" id="txtTelefonoCelular" placeholder="Ingrese su número celular" />
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-lx-6 col-xxl-6">
                            <label for="fechaIngreso" className="form-label">
                                Fecha de Ingreso
                            </label>
                            <input type="date" className="form-control" id="fechaIngreso" />  
                        </div>  
                    </div>
                    <div className="row rol">
                        <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-lx-9 col-xxl-9">
                            <p>Seleccione el Estado:</p>
                            <label className="form-check-label" for="EstadoPendiente">
                                Pendiente
                            </label>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="EstadoPendiente" checked />
                            <label className="form-check-label" for="EstadoNoAutorizado">
                                No Autorizado
                            </label>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="EstadoNoAutorizado" />
                            <label className="form-check-label" for="EstadoAutorizado">
                                Autorizado
                            </label>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="EstadoAutorizado" />
                        </div>
                    </div>
                    <div className="row rol">    
                        <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-lx-9 col-xxl-9">
                            <p>Seleccione el Rol del Empleado:</p>
                            <label className="form-check-label" for="RolAdministrador">
                                Administrador
                            </label>
                            <input className="form-check-input" type="checkbox" value="" id="RolAdministrador" />
                            <label className="form-check-label" for="RolVendedor">
                                Vendedor
                            </label>
                            <input className="form-check-input" type="checkbox" value="" id="RolVendedor" />
                        </div>
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-lx-3 col-xxl-3">
                            <button onClick={UsersInfo} id="btnEnviarFormulario" className="btn btn-primary" type="submit">ENVIAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default UsersForm;