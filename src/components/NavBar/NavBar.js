import logo from '../../components/SweetNails/LogoSweet.png'
import './style.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import CartButton from '../CartWidget/CartButton'
import { Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <NavLink to='/'>
                <img width={'100px'} src ={logo} alt="logo-SweetNails-Cuidado-De-Uñas"/>
                </NavLink>
           
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to='categoria/producto'>Productos</NavLink>
                        </li>
                        <li>
                            <NavLink to='categoria/servicio'>Servicio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/carrito'><CartButton /></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
                <div><Button>Iniciar Sesión</Button>{""}
            </div>
        </div>
       
    )
}

export default NavBar;