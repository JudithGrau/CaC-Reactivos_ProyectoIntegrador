
import { LoginProvider } from './components/Login/LoginContext'
import { CartProvider } from './components/Cart'
import { MainLayout } from './components/layouts'
import { MainMenu } from './components/NavBar'
import { Router } from './components/router'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'



function App() {
  return (

    <div className="App">
      <LoginProvider>
        <CartProvider>
          <MainMenu />
          
          <MainLayout>
            <Router />
          </MainLayout>

          <Footer/>
        </CartProvider>
      </LoginProvider>

    </div>
  );
}

export default App;
