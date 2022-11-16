import { useContext } from "react"
import { CartContext } from "./CartContex"
import '../Styles/Cart.css' 

export const Cart = () => {

    const { items } = useContext(CartContext)

    if (items.length > 0) {
        return (
            <> 
                <div className="cabecera">
                    <h4 className="tucarrito mt-3">Tu Carrito <i className="bi bi-cart3"></i></h4>
                </div>   
                <div className="container">
                    { items.map(({ id, nombre, imagen , precio, cantidad }) =>
                            <div className="card mb-1" key={id}>
                                <div className="fila">
                                    <div className="producto">
                                        <img src={ imagen } className='img-fluid' alt={ id } />
                                        <p className="text-muted">{ nombre }</p>
                                    </div>
                                    <div className="precioUni">
                                        <div className="card-body">
                                            <p className="text-muted">Precio: ARS${ precio }</p>
                                        </div>
                                    </div>
                                    <div className="cantidad">
                                        <div className="card-body">
                                            <p className="text-muted">Cantidad: { cantidad }</p>
                                        </div>
                                    </div>
                                    <div className="subtotal">
                                        <div className="card-body">
                                            <p className="text-muted"> SubTotal: </p>
                                        </div>
                                    </div>
                                    <div className="options">
                                        <div className="card-body">
                                            <button className="btn btn-danger"><i className="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )}
                </div>
                <div className="container">
                    <button className="shadow fw-bold fs-5 w-100 btn btn-primary">Ir al checkout</button>
                </div>
        </>
        )
    }
    else {
        return (<h2>No tienes productos en tu carrito</h2>)
    }
}