/* 
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Cart"
import { Logo } from "./Logo"
import '../Styles/Navbar.css' 


export const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [active, setActive] = useState(window.location.pathname);
  const opciones = ['Inicio', 'Nosotros', 'Contacto', 'Register', 'Login'];


  function activeLink(opcion) {
    const rutaActual = `/${opcion.toLowerCase()}`;
    return active === rutaActual ? 'fw-bold' : null;
  }


  function handleClick(opcion) {
    const rutaActual = `/${opcion.toLowerCase()}`;
    setActive(rutaActual);
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-success w-auto'>
        <div className='container-fluid'>
          <Link className='navbar-brand text-light' to='/'>
            <Logo className='img-fluid' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNavAltMarkup'
          >
            <div className='navbar-nav'>
              {cartCount > 0 && (
                <Link to='carrito' className='cart'>
                  <i className='bi bi-cart3'></i>
                  <span className='cont'>{cartCount}</span>
                </Link>
              )}


              {opciones.map((opcion) => (
                <Link
                  key={opcion}
                  className={`nav-link link-light menu ${activeLink(opcion)}`}
                  to={opcion.toLowerCase()}
                  onClick={() => handleClick(opcion)}
                >
                  {opcion}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

 */