import {Link} from 'react-router-dom'

import './Header.css'
import logo from '../../assets/logo/DLS.png'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md " >
            
    <div className="container">

        <Link className="dls-navbar-brand navbar-brand" to="/">
        <img className="nav-logo" src={logo} alt="Site Logo"/>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">

        <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
            <Link className="dls-nav-link nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
            <Link className="dls-nav-link nav-link" to="/kontakt">Kontakt</Link>
            </li>

            <li className="nav-item">
            <Link className="dls-nav-link nav-link "  to="/om-os">Om Os</Link>
            </li> 

        </ul> 

        </div>  

    </div>
    
</nav>
  )
}

export default Header