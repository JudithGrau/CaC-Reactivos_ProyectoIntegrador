import { useContext, useState } from "react"
import { CartContext } from "./CartContex";
import '../Styles/CartBox.css' 

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