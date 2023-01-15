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
              errores.correo = 'Por favor ingresa un correo electronico'
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
              errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
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
					<Form className="formulario col-10 text-start fw-bold p-4 bg-light rounded-5 border border-success border-3 mb-3">
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
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}


          {/* <label>Nombre:</label>
          <input
            name='nombre'
            value={form.nombre}
            type='text'
            className='form-control my-3 rounded-4'
            placeholder='Ingrese su nombre'
            onChange={inputChangeHandle}
          />

          <label>Dirección de Email: </label>
          <input
            name='email'
            value={form.email}
            type='email'
            className='form-control my-3 rounded-4'
            placeholder='Ingrese su email'
            onChange={inputChangeHandle}
          />

          <label>Mensaje:</label>
          <textarea
            name='texto'
            value={form.texto}
            className='form-control my-3 rounded-4'
            placeholder='Ingrese su mensaje'
            rows={5}
            onChange={inputChangeHandle}
          />

          <section className='d-flex flex-row-reverse'>
            <button
              className='btn btn-success btn-md m-3 px-4 rounded-4'
              onClick={handleClick}
            >
              Enviar
            </button>
          </section> */}
        </Formik>
      </div>
    </div>
    </>
  );
};
