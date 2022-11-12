import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo1.jpg'

export const Logo = ({ clases }) =>{
    
    return(
        <Link to='/'>
            <img 
                src={ logo }
                alt={ logo }
                className={ clases } 
            />
        </Link>
    )
}