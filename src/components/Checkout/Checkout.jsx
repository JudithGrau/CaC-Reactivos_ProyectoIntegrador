import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../Styles/Formulario.css' 

export const Checkout = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <>
        <h2 className='titulo'>Checkout</h2>
        <div className='container'>
        <div className='container col-9 d-flex flex-column justify-content-center align-items-center'>
            <Formik
            initialValues={{
                nombreCompleto: '',
                correo: '',
                telefono: ''
            }} 
            validate={(valores) => {
                let errores = {};

                // Validacion nombre
                if(!valores.nombreCompleto){
                errores.nombreCompleto = 'Por favor ingresa un nombre'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombreCompleto)){
                errores.nombreCompleto = 'El nombre solo puede contener letras y espacios'
                }

                // Validacion correo
                if(!valores.correo){
                errores.correo = 'Por favor ingresa un correo electrónico'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guión bajo.'
                }

                // Validacion telefono
                if(!valores.telefono){
                    errores.telefono = 'Por favor ingresa un teléfono'
                    } else if(!/^\d{7,14}$/.test(valores.telefono)){
                    errores.telefono = 'El teléfono solo puede contener números y el máximo son 14 dígitos.'
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
                                <label htmlFor="nombreCompleto">Nombre completo</label>
                                <Field
                                    type="text" 
                                    id="nombreCompleto" 
                                    name="nombreCompleto" 
                                    className="form-control my-3 rounded-4"
                                    placeholder="Ingrese el nombre completo..."
                                />
                                <ErrorMessage name="nombreCompleto" component={() => (<div className="error">{errors.nombreCompleto}</div>)} />
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
                                <label htmlFor="telefono">Teléfono</label>
                                <Field
                                    type="text" 
                                    id="telefono" 
                                    name="telefono" 
                                    className="form-control my-3 rounded-4"
                                    placeholder="Ingrese el teléfono..."
                                />
                                <ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
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
