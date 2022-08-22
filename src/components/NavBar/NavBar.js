import logo from '../../logo.svg';
import './style.css'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img width={'100px'} src ={logo} alt="logo"/>
            </div> 
            <div>
                <ul>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Acerca de</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </div>
            <div>
                <button>Iniciar Sesión</button>
            </div>
        </div>
       
    )
}

export default NavBar;