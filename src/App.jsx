import { LoginProvider } from './components/Login'
import { CartProvider } from './components/Cart'
import { MainLayout } from './components/layouts'
import { Navbar } from './components/NavBar'
import { Router } from './components/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div className="App">
      <LoginProvider>
        <CartProvider>
          <Navbar />

          <MainLayout>
            <Router />
          </MainLayout>

        </CartProvider>
      </LoginProvider>
    </div>
  );
}

export default App
