import React from "react"
//import Swal from 'sweetalert2'

export const Checkout = () =>{
    const handleSubmit = (e) => {
        e.preventDefault()

        
    }

    return (
        <>
            <h2 className='titulo m-3'>Checkout</h2>
            <div className="container">
                <div className='container col-9 d-flex flex-column justify-content-center align-items-center'>
                <form className="col-6 text-start fw-bold p-4 bg-light rounded-5 border border-success border-3 mb-3" onSubmit={handleSubmit}>
                            <div className="name">
                                <label className="">Nombre Completo </label>
                                <input 
                                    name="nombre"
                                    //value={values.nombre}
                                    type="text"
                                    className="form-control my-3 rounded-4"
                                    placeholder='Ingrese su nombre'
                                    //onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="email">
                                <label className="">Email </label>
                                <input 
                                    name="email"
                                    //value={values.email}
                                    type="email"
                                    className="form-control my-3 rounded-4"
                                    placeholder='Ingrese su email'
                                    //onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="confirmEmail">
                                <label className="label">Confima el Email </label>
                                <input 
                                    name="confirmEmail"
                                    //value={values.confirmEmail}
                                    type="email"
                                    className="form-control my-3 rounded-4"
                                    placeholder='Confirme su email'
                                    //onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="telefono">
                                <label className="label">Teléfono </label>
                                <input 
                                    name="tel"
                                    //value={values.tel}
                                    type="tel"
                                    className="form-control my-3 rounded-4"
                                    placeholder='Ingrese su telefono'
                                    //onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <section className="d-flex justify-content-center">
                                <button className="btn btn-success btn-md m-3 px-4 rounded-4" type="submit">Submit</button>
                            </section>
                        </form>
                </div>
            </div>
        </>
    )
}