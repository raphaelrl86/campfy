import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
// import {ThemeContext} from '../context/theme.context'
import {AuthContext} from '../context/auth.context'



const Navbar = () => {
    
  // const {theme, toggleTheme} = useContext(ThemeContext)
  const {logout, loggedInUser} = useContext(AuthContext)
  const admin = process.env.REACT_APP_ADMIN_VALIDATION;
  


    return ( 

      <nav className={'navbar bg-light'}>
        {/* <nav className={`navbar bg-${theme}`}> */}

        <div className="container-fluid">

            
          <NavLink className="navbar-brand" to="/"> 
            <span className="navbar-text">  Página inicial</span>
          </NavLink> 
            
          {!loggedInUser.jwt && (
            <NavLink className="navbar-brand" to="/signup"> 
              <span className="navbar-text">  SignUp </span>
            </NavLink> 
          )}
            
          {!loggedInUser.jwt && (
            <NavLink className="navbar-brand" to="/login"> 
                <span className="navbar-text">  Login </span>
            </NavLink>
          )}

          {/* <button className="navbar-text" onClick={() => toggleTheme()}>Mudar tema</button> */}
            

          {loggedInUser.jwt && (
            <>
              <NavLink
                className="navbar-brand"
                to={`/user/${loggedInUser.user._id}`}
              >
                <span className="navbar-text"> Olá, {loggedInUser.user.name}</span>
                  
              </NavLink>
            </>

          )}

          {loggedInUser.user.email === admin && (
            <>
              <NavLink
                className="navbar-brand"
                 to={'/create/camp'}
              >
                <span className="navbar-text"> Criar camp </span>
                  
              </NavLink>
            </>

          )}

          {loggedInUser.jwt && (
            
            <>
              <NavLink className="navbar-text" to="/" button onClick={() => logout()} > Logout </NavLink>
            </>

          )}

        </div>

      </nav>
    );
}
 
export default Navbar;