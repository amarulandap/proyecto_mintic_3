import React, {Fragment, useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import "./AddVentasStyle.css"

const AddVentas = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	
	return (
        <div className="contenedor">
        <Fragment>
		
		<Formik
		initialValues={{
			IDVenta:'',
			ValorVenta: 0,
			Descripcion: '',
			FechaVenta: '',
			FechaPago: '',
			Responsable: '',
		}}

		validate={(valores) => {
			let errores = {};


			if(!valores.IDVenta){
				errores.IDVenta='Ingrese el ID de la venta'
			}

			if(!valores.ValorVenta){
				errores.ValorVenta='Ingrese el valor de la venta'
			}

			if(!valores.Descripcion){
				errores.Descripcion='Ingrese la descripción de la venta'
			}

			if(!valores.FechaVenta){
				errores.FechaVenta='Ingrese la fecha de la venta'
			}

			if(!valores.FechaPago){
				errores.FechaPago='Ingrese la fecha de pago'
			}

			if(!valores.Responsable){
				errores.Responsable='Ingrese el responsable de la venta'
			}

			return errores;
		}} 
		onSubmit={(valores, {resetForm}) => {
			resetForm();
			console.log("Datos enviados");
			cambiarFormularioEnviado(true);
			setTimeout(() => cambiarFormularioEnviado(false), 5000)
		}}
		>
		{({errors}) => (
		<Form className="formulario">
			<div>
				<label htmlFor="IDVenta">ID Venta</label>
				<Field 
					type="text" 
					id="IDVenta" 
					name="IDVenta" 
					placeholder="Ingrese el id de la venta" 
					
				/>
				<ErrorMessage name="IDVenta" component={() => (
				<div className="error">{errors.IDVenta}</div>
				)}/>

			</div>

			<div>
				<label htmlFor="ValorVenta">Valor Venta</label>
				<Field 
					type="number" 
					id="ValorVenta" 
					name="ValorVenta" 
					placeholder="Ingrese el monto en pesos" 
					
				/>
				<ErrorMessage name="ValorVenta" component={() => (
				<div className="error">{errors.ValorVenta}</div>
				)}/>			
				</div>

			<div>
				<label htmlFor="Descripcion">Descripción</label>
				<Field 
					name="Descripcion" 
					as="textarea"
					placeholder="Ingrese una descripción de la venta " 
					
				/>
					<ErrorMessage name="Descripcion" component={() => (
				<div className="error">{errors.Descripcion}</div>
				)}/>
				</div>

			<div>
				<label htmlFor="FechaVenta">Fecha Venta</label>
				<Field 
					type="date" 
					id="FechaVenta" 
					name="FechaVenta" 
					placeholder="Ingrese la fecha de la venta " 
					
					/>
				<ErrorMessage name="FechaVenta" component={() => (
				<div className="error">{errors.FechaVenta}</div>
				)}/>			</div>
				

			<div>
				<label htmlFor="FechaPago">Fecha Pago</label>
				<Field 
				type="date" 
				id="FechaPago" 
				name="FechaPago" 
				placeholder="Ingrese la fecha de pago " 
				
				/>
				<ErrorMessage name="FechaPago" component={() => (
				<div className="error">{errors.FechaPago}</div>
				)}/>			
				</div>

			<div>
			<label htmlFor="Responsable">Responsable</label>
				<Field name="Responsable" as="select">
					<option value="Vacio">---------------</option>
					<option value="Vendedor 1">Vendedor 1</option> 
					<option value="Vendedor 2">Vendedor 2</option> 
					<option value="Vendedor 3">Vendedor 3</option> 
					<option value="Vendedor 4">Vendedor 4</option> 
				</Field>
				<ErrorMessage name="Responsable" component={() => (
				<div className="error">{errors.Responsable}</div>
				)}/>

				



			</div>

			<button type="submit">Guardar</button>
			{formularioEnviado && <p className="exito">Venta guardada con éxito!</p>}

		</Form>

		)}
		</Formik>
        


		
        </Fragment>
        </div>
	);
}
 
export default AddVentas;