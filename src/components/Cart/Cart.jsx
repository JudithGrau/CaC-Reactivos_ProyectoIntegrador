<<<<<<< HEAD
import { useContext } from "react"
import { CartContext } from "./CartContex"
import '../Styles/Cart.css' 
=======
import { useContext } from 'react';
import { CartContext } from './CartContex';
>>>>>>> 683e021e6010a33920cf623fed9037fa02fcd2c6

export const Cart = () => {
  //export Cart inicio
  const { items } = useContext(CartContext);

  if (items.length > 0) {
    //if inicio
    return (
      //inicio return
      <>

<<<<<<< HEAD
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
=======
        <h1 className='mb-4'>Carrito:</h1>
      <div className='container'>

        {items.map(
          ({
            id,
            nombre,
            marca,
            imagen,
            precio,
            origen,
            finca,
            altura,
            proceso,
            varietal,
            cantidad,
          }) => (
            <div className='card mb-3' key={id}>
              <div className='row g-0'>
                <div className='col-5 col-sm-4'>
                  <img src={imagen} className='img-fluid w-50' alt={id} />
                </div>
                <div className='col-7 col-sm-8'>
                  <div className='card-body'>
                    <h5 className='card-title'>{nombre}</h5>
                    <h6 className='card-text'>{marca}</h6>
                    <p className='card-text'> {origen}</p>
                    <p className='card-text'> {finca}</p>
                    <p className='card-text'> {altura}</p>
                    <p className='card-text'> {proceso}</p>
                    <p className='card-text'> {varietal}</p>
                    <p className='card-text'>
                      <small className='text-muted'>
                        ${precio} - cantidad: {cantidad}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        <button className='shadow fw-bold fs-5 w-100 btn btn-warning'>
          Ir al checkout
        </button>
      </div>
      </>
    );
  } else {
    return <h2>No tenes productos en tu carrito</h2>;
  }
};
>>>>>>> 683e021e6010a33920cf623fed9037fa02fcd2c6
