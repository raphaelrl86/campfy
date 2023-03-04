import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import {ThemeContext} from '../context/theme.context'
import {AuthContext} from '../context/auth.context'

const Navbar = () => {
    
  const {theme, toggleTheme} = useContext(ThemeContext)
  const {logout} = useContext(AuthContext)

    return ( 

        <nav className={`navbar bg-${theme}`}>

          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"> 
              {/* <img src= {DiceImage} alt="Logo de dados" width="30" height="24" className="d-inline-block align-text-top"/> */}
              <span class="navbar-text">  Página inicial</span>
            </NavLink> 
            <NavLink className="navbar-brand" to="/signup"> 
              {/* <img src= {DiceImage} alt="Logo de dados" width="30" height="24" className="d-inline-block align-text-top"/> */}
              <span class="navbar-text">  SignUp </span>
            </NavLink> 
            <NavLink className="navbar-brand" to="/login"> 
              {/* <img src= {DiceImage} alt="Logo de dados" width="30" height="24" className="d-inline-block align-text-top"/> */}
              <span class="navbar-text">  Login </span>
            </NavLink> 
          </div>

          <button onClick={() => toggleTheme()}>Mudar tema</button>
          <NavLink className="navbar-brand" to="/" button onClick={() => logout()} > Logout </NavLink>
          

      </nav>
    );
}
 
export default Navbar;