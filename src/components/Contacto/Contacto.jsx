import { useState } from 'react';

const initialState = {
  nombre: '',
  email: '',
  texto: '',
  nombre_empresa: '',
  numero_orden: '',
};

export const Contacto = () => {
  const [form, setForm] = useState(initialState);

  const inputChangeHandle = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <aside className='d-flex'>
      <div className='container col-9 mt-5 d-flex flex-column justify-content-center align-items-center'>
        <h2 className='m-3'>Contacto</h2>
        <form
          name='formulario'
          className='col-6 text-start fw-bold p-4 bg-light rounded-5 border border-success border-3 mb-3'
        >
          <label>Nombre:</label>
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
          </section>
        </form>
      </div>
    </aside>
  );
};
