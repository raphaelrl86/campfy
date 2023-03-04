import {Link} from 'react-router-dom'

const Navbar = () => {
    
    return ( 
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"> 
              {/* <img src= {DiceImage} alt="Logo de dados" width="30" height="24" className="d-inline-block align-text-top"/> */}
              <span class="navbar-text">  Página inicial</span>
            </Link> 
            <Link className="navbar-brand" to="/signup"> 
              {/* <img src= {DiceImage} alt="Logo de dados" width="30" height="24" className="d-inline-block align-text-top"/> */}
              <span class="navbar-text">  SignUp </span>
            </Link> 
            <Link className="navbar-brand" to="/login"> 
              {/* <img src= {DiceImage} alt="Logo de dados" width="30" height="24" className="d-inline-block align-text-top"/> */}
              <span class="navbar-text">  Login </span>
            </Link> 
            
          </div>
      </nav>
    );
}
 
export default Navbar;