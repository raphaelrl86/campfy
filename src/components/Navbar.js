import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import {ThemeContext} from '../context/theme.context'
import {AuthContext} from '../context/auth.context'



const Navbar = () => {
    
  const {theme, toggleTheme} = useContext(ThemeContext)
  const {logout, loggedInUser} = useContext(AuthContext)



    return ( 

        <nav className={`navbar bg-${theme}`}>

          <div className="container-fluid">

            
            <NavLink className="navbar-brand" to="/"> 
              <span className="navbar-text">  Página inicial</span>
            </NavLink> 
            

            <NavLink className="navbar-brand" to="/signup"> 
              <span className="navbar-text">  SignUp </span>
            </NavLink> 
            
           
            <NavLink className="navbar-brand" to="/login"> 
              <span className="navbar-text">  Login </span>
            </NavLink>

            <button className="navbar-text" onClick={() => toggleTheme()}>Mudar tema</button>
            
            {/* <NavLink className="navbar-text" to="/" button onClick={() => logout()} > Logout </NavLink> */}


            {/* {loggedInUser?.user && <ol>
            
            <NavLink className="navbar-brand" to={`/user/:${loggedInUser.user._id}`}>
              <span className="navbar-text"> {loggedInUser.user.name}  </span>
            </NavLink></ol> }  */}

            

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