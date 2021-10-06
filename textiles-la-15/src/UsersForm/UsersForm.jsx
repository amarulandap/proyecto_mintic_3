import React, {Fragment} from "react";
import './UsersFormStyles.css';

function UsersForm (){

    return (
        <Fragment>
            <div>
                <form class="col-6 col-sm-6 col-md-6 col-lg-6 col-lx-6 col-xxl-6 style_form_users">
                    <h1 class="title_form">
                        Formulario de Registro y actualización de datos
                    </h1>
                    <div class="row">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-lx-6 col-xxl-6">
                            <label for="txtIdFormulario" class="form-label">
                                Número de Documento
                            </label>
                            <input type="text" class="form-control" id="txtIdFormulario" placeholder="Ingrese su número de identificación" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="txtPrimerNombre" class="form-label">
                                Primer Nombre
                            </label>
                            <input type="text" class="form-control" id="txtPrimerNombre" placeholder="Ingrese su primer Nombre" />
                        </div>
                        <div class="col">
                            <label for="txtSegundoNombre" class="form-label">
                                Segundo Nombre
                            </label>
                            <input type="text" class="form-control" id="txtSegundoNombre" placeholder="Ingrese su segundo Nombre" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="txtPrimerApellido" class="form-label">
                                Primer Apellido
                            </label>
                            <input type="text" class="form-control" id="txtPrimerApellido" placeholder="Ingrese su primer Apellido" />
                        </div>
                        <div class="col">
                            <label for="txtSegundoApellido" class="form-label">
                                Segundo Apellido
                            </label>
                            <input type="text" class="form-control" id="txtSegundoApellido" placeholder="Ingrese su segundo Apellido" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="txtDireccionDomicilio" class="form-label">Dirección de domicilio</label>
                            <input type="text" class="form-control" id="txtDireccionDomicilio" placeholder="Ingrese su domicilio actual" />
                        </div>   
                    </div>
                     <div class="row">
                        <div class="col">
                            <label for="txtTelefonoFijo" class="form-label">
                                Teléfono Fijo
                            </label>
                            <input type="text" class="form-control" id="txtTelefonoFijo" placeholder="Ingrese su número telefónico" />
                        </div>
                        <div class="col">
                            <label for="txtTelefonoCelular" class="form-label">
                                Teléfono Celular
                            </label>
                            <input type="text" class="form-control" id="txtTelefonoCelular" placeholder="Ingrese su número celular" />
                        </div> 
                    </div>
                    <div class="row">
                        <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-lx-6 col-xxl-6">
                            <label for="fechaIngreso" class="form-label">
                                Fecha de Ingreso
                            </label>
                            <input type="date" class="form-control" id="fechaIngreso" />  
                        </div>  
                    </div>
                    <div class="row rol">
                        <div class="col-9 col-sm-9 col-md-9 col-lg-9 col-lx-9 col-xxl-9">
                            <p>Seleccione el Estado:</p>
                            <label class="form-check-label" for="EstadoPendiente">
                                Pendiente
                            </label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="EstadoPendiente" checked />
                            <label class="form-check-label" for="EstadoNoAutorizado">
                                No Autorizado
                            </label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="EstadoNoAutorizado" />
                            <label class="form-check-label" for="EstadoAutorizado">
                                Autorizado
                            </label>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="EstadoAutorizado" />
                        </div>
                    </div>
                    <div class="row rol">    
                        <div class="col-9 col-sm-9 col-md-9 col-lg-9 col-lx-9 col-xxl-9">
                            <p>Seleccione el Rol del Empleado:</p>
                            <label class="form-check-label" for="RolAdministrador">
                                Administrador
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="RolAdministrador" />
                            <label class="form-check-label" for="RolVendedor">
                                Vendedor
                            </label>
                            <input class="form-check-input" type="checkbox" value="" id="RolVendedor" />
                        </div>
                        <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-lx-3 col-xxl-3">
                            <button id="btnEnviarFormulario" class="btn btn-primary" type="submit">ENVIAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default UsersForm;