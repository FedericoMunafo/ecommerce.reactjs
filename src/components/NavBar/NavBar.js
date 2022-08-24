
import logo from '../../components/SweetNails/LogoSweet.png'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img width={'100px'} src ={logo} alt="logo-SweetNails-Cuidado-De-Uñas"/>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Acerca de</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="icono">
                <FontAwesomeIcon icon={faCartShopping} />{""}
            </div>
                <div><button className='boton'>Iniciar Sesión</button>{""}
            </div>
        </div>
       
    )
}

export default NavBar;