import { useContext, useState } from "react";
import { LoginContext, Register } from "./"

export const Login = () => {

    const { login, waiting, wait, error, register, signup } = useContext(LoginContext);

    const [form, setForm] = useState({ name: '',pass: '' });

    function checkForm(e) {
        e.preventDefault();
        wait();
        login(form.name, form.pass)
    }
    
    function handleInputChange(e) {
        const { name, value }= e.target
        setForm({ ...form, [name]: value })
    }

    return register
    ? <Register
        signup={signup}
        waiting={waiting}
        handleInputChange={handleInputChange}
    />
    : (
        <form name= 'login'>
            <h1 className="my-5">Login</h1>
            <div className="form-floating mb-3">
                <input
                name="name"
                type="text"
                className="form-control"
                id="floatingInput"
                onChange={handleInputChange}
                />
                <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating">
                <input
                name="pass"
                type="password"
                className="form-control"
                id="floatingPassword"
                onChange={handleInputChange}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="container mt-4">
                <button
                    disabled={ waiting }
                    className='row w-100 btn btn-primary my-1'
                    onClick={checkForm}>
                    Login
                </button>
                
                <button
                    disabled={ waiting }
                    className='row w-100 btn btn-primary my-1'
                    //onClick={checkForm}
                    >
                    Login cn cuenta Google
                </button>
            </div>
            <button
                className="btn link-secondary"
                onClick={ signup}>
                Registrarse
            </button>
        </form>
    )
}