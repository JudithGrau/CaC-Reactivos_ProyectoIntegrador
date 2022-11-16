import { Route, Routes } from "react-router-dom"
import { ItemDetailContainer } from "../Home/ItemDetail"
import { ItemListContainer } from "../Home/ItemList"
import { Contacto } from "../Contacto/Contacto"
import { Nosotros } from "../Nosotros/Nosotros"
import { Cart } from "../Cart/Cart"
import { LoginLayout } from "../layouts/LoginLayout"
import { Register } from "../Register/Register"
import { Login } from '../Login/Login';


export const Router = () =>{
    return (
        <LoginLayout>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/carrito' element={<Cart />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/inicio' element={<ItemListContainer />} />
                <Route path='/*' element={<ItemListContainer />} />
            </Routes>
        </LoginLayout>

    )
}