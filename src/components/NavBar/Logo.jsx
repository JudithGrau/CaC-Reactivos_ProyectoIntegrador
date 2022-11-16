import { Link } from 'react-router-dom';

import logo from './../../assets/img/logo.png'

export const Logo = ({ clases }) =>{
    
    return(
            <img 
                src={ logo }
                alt={ logo }
                className={ clases } 
                width='250px'
            />
    )
} 

