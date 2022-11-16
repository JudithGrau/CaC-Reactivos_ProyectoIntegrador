<<<<<<< HEAD
import { useContext, useState } from "react"
import { CartContext } from "./CartContex";
import '../Styles/CartBox.css' 
=======
import { useContext, useState } from 'react';
import { CartContext } from './CartContex';
>>>>>>> 683e021e6010a33920cf623fed9037fa02fcd2c6

export const CartBox = ({ item }) => {
  const [count, setCount] = useState(0);
  const { addProducts } = useContext(CartContext);

  function add() {
    setCount(count + 1);
  }

  function remove() {
    count > 0 && setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

<<<<<<< HEAD
    function reset() {
        setCount(0)
    }

    return (
        <>
            <div className="contentCartBox">
                <div className="cantidad">
                    <h5 className="text-center">
                        Cantidad: { count } Unidad/es
                    </h5>
                </div>
                
                <div className="botonesSumaResta">

                    {/* Restar */ }
                    <div className="resta">
                        <button
                            className="btn btn-danger"
                            onClick={ remove }>
                            <i className="bi bi-dash-lg"></i>
                        </button>
                    </div>

                    {/* Restart */ }
                    <div className="restart">
                        <button
                            className="btn btn-secondary"
                            onClick={ reset }
                        >
                            <i className="bi bi-arrow-clockwise"></i>
                        </button>
                    </div>

                    {/* Sumar */ }
                    <div className="suma">
                        <button
                            className="btn btn-primary"
                            onClick={ add }>
                            <i className="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            <hr />

            <div className="contentCartBuyButtons">
                <button
                    className="btn btn-secondary"
                    onClick={ () => addProducts(count, item) }
                >
                    <i className="bi bi-cart-plus"></i>
                    Agregar al carrito
                </button>
                
                <button
                    className="btn btn-secondary"
                >
                    <i className="bi bi-cart-check"></i>
                    Comprar
                </button>
            </div>
        </>
    )
}
=======
  return (
    <div className='container'>
      <div className='row gap-2'>
        {/* Restar */}
        <div className='col-1 align-end'>
          <button className='btn btn-outline-danger' onClick={remove}>
            -1
          </button>
        </div>

        <div className='col'>
          <h5 className='text-center'>Cantidad: {count} unidad/es</h5>
        </div>

        {/* Sumar */}
        <div className='col-1 align-end'>
          <button className='btn btn-outline-primary' onClick={add}>
            +1
          </button>
        </div>
      </div>

      <hr />

      <div className='row gap-2'>
        <button
          className='btn btn-secondary'
          onClick={() => addProducts(count, item)}
        >
          Agregar al carrito
        </button>
        <button className='btn btn-secondary' onClick={reset}>
          Reestablecer
        </button>
      </div>
    </div>
  );
};
>>>>>>> 683e021e6010a33920cf623fed9037fa02fcd2c6
