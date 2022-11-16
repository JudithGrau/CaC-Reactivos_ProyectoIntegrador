import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Cart"
import { Logo } from "./Logo"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/Navbar.css' 

export const MainMenu = () => {

    const { cartCount } = useContext(CartContext)
    const [active, setActive] = useState(window.location.pathname)
    const opciones = ['Inicio', 'Nosotros', 'Contacto','Register', 'Login']

    function activeLink(opcion) {
        const rutaActual = `/${opcion.toLowerCase()}`
        return active === rutaActual
            ? 'fw-bold'
            : null
    }

    function handleClick(opcion) {
        const rutaActual = `/${opcion.toLowerCase()}`
        setActive(rutaActual)
    }

    return (
        <>
            <Navbar className ="navbar" collapseOnSelect expand="md" bg="success" variant="dark">
                <Navbar.Brand href="/">
                    <div className="logo">
                        <Logo />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="">
                        <div className="enlaces">                        
                            {cartCount > 0 && <Link
                            to='carrito'
                            className="cart">
                                <i className="bi bi-cart3"></i>
                                <span className="cont">{cartCount}</span>
                            </Link>}
                            
                            <div className="vr" />

                            {opciones.map(opcion =>
                            <Link
                                key={opcion}
                                className={`nav-link link-light menu ${activeLink(opcion)}`}
                                to={opcion.toLowerCase()}
                                onClick={() => handleClick(opcion)}>
                                    {opcion}
                            </Link>
                            )}
                        </div> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}