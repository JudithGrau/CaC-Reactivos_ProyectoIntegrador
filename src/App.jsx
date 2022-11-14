import { CartProvider } from './components/Cart'
import { MainLayout } from './components/layouts'
import { Navbar } from './components/NavBar'
import { Router } from './components/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'


function App() {

  return (
    <div className="App">

        <CartProvider>
          <Navbar />
          
          <MainLayout>
            <Router />
          </MainLayout>

        </CartProvider>

    </div>
  );
}

export default App
