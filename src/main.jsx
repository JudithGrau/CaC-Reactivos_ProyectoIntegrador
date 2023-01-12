import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addProduct, addProducts, deleteProduct, getProductById, getProductbyName, getProducts, setProduct, updateProduct } from './firebase';
import { updateDoc } from 'firebase/firestore/lite';

// Obtener productos
//getProducts().then(res => console.log(res))

// Agregar un producto
// let producto = { nombre: 'Juan', edad: 15 };
// addProduct(producto).then(res => console.log(res.id))

// Agregar productos
/* fetch('./db.json')
  .then(res => res.json())
  .then(docs => addProducts(docs)) */

// Buscar producto por id
/* const id = 'VudOirmg2rmyf0VSFocJ'
getProductById(id) */

// Buscar producto por otro dato del documento
/* const name = 'Café Honduras'
getProductbyName(name) */

// Actualizar o crear si no existe
/* const id = '1'
const product = { nombre: 'papas', precio: 50 }
setProduct(id, product) */

// Actualizar sólo si existe
/* const id = '1'
const product = { nombre: 'papas', precio: 50 }
updateProduct(id, product) */

// Borrar producto
/* const id = '1'
deleteProduct(id) */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
