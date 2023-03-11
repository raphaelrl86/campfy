import {Link} from 'react-router-dom'

const LoggedNavbar = () => {
    
    return ( 

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                
                <li className="nav-item dropdown">
                    <Link
                    className="nav-link dropdown-toggle d-flex align-items-center"
                    to="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                        className="rounded-circle"
                        style={{height:22}}
                        alt="Foto do usuário"
                        loading="lazy"
                    />
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                        <Link className="dropdown-item" to="#">My profile</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="#">Settings</Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" href="#">Logout</Link>
                    </li>
                    </ul>
                </li>
                </ul>
            </div>
        </nav>

    )
}
 
export default LoggedNavbar;



