import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../Styles/Formulario.css' 

export const Contacto = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
    <h2 className='titulo'>Contacto</h2>
    <div className='container'>
      <div className='container col-9 d-flex flex-column justify-content-center align-items-center'>
        <Formik
          initialValues={{
            nombre: '',
            correo: ''
          }} 
          validate={(valores) => {
            let errores = {};

            // Validacion nombre
            if(!valores.nombre){
              errores.nombre = 'Por favor ingresa un nombre'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
              errores.nombre = 'El nombre solo puede contener letras y espacios'
            }

            // Validacion correo
            if(!valores.correo){
              errores.correo = 'Por favor ingresa un correo electrónico'
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
              errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guión bajo.'
            }

            return errores;
          }}
          onSubmit={(valores, {resetForm}) => {
            resetForm();
            console.log('Formulario enviado');
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
          }}
        >
          {( {errors} ) => (
					<Form className="formulario col-9 text-start fw-bold p-4 bg-light rounded-5 border border-success border-3 mb-3">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
                className="form-control my-3 rounded-4"
								placeholder="Ingrese el nombre..."
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Email</label>
							<Field
								type="text" 
								id="correo" 
								name="correo"
                className="form-control my-3 rounded-4" 
								placeholder="Ingrese el email..." 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<Field 
                name="mensaje" 
                as="textarea" 
                className="form-control my-3 rounded-4"
                placeholder="Mensaje" />
						</div>

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con éxito!</p>}
					</Form>
				)}
        </Formik>
      </div>
    </div>
    </>
  );
};
