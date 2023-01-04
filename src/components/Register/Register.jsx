/* import { useState } from 'react';

const initialState = {
  email: '',
  contrasenia: '',
  confirmar_contrasenia: '',
};

export const Register = () => {
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
    <div>
      <aside className='d-flex'>
        <div className='container col-9 mt-5 d-flex flex-column justify-content-center align-items-center'>
          <h2 className='m-3'>Registrarme</h2>
          <form
            name='formulario'
            className='col-6 text-start fw-bold p-4 bg-light rounded-5 border border-success border-3 mb-3'
          >
            <label>Dirección de Email: </label>
            <input
              name='email'
              value={form.email}
              type='email'
              className='form-control my-3 rounded-4'
              placeholder='Ingrese su email'
              onChange={inputChangeHandle}
            />

            <label>Contraseña:</label>
            <input
              name='contrasenia'
              value={form.contrasenia}
              type='password'
              className='form-control my-3 rounded-4'
              placeholder='Ingrese su contraseña'
              onChange={inputChangeHandle}
            />

            <label>Confirme la Contraseña:</label>
            <input
              name='confirmar_contrasenia'
              value={form.confirmar_contrasenia}
              type='password'
              className='form-control my-3 rounded-4'
              placeholder='Confirme su contraseña'
              onChange={inputChangeHandle}
            />

            <section className='d-flex flex-row-reverse'>
              <button
                className='btn btn-success btn-md m-3 px-4 rounded-4'
                onClick={handleClick}
              >
                Registrarme
              </button>
            </section>
          </form>
        </div>
      </aside>
    </div>
  );
};
 */