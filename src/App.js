import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreateCampingPage from './pages/CreateCampingPage';
import SignUpPage from './pages/SignUpPage';
import CampingsListPage from './pages/CampingsListPage';
import CampingDetailsPage from './pages/CampingDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import EditUserProfilePage from './pages/EditUserProfilePage';
import LoginPage from './pages/LoginPage'
import EditCampingPage from './pages/EditCampingPage';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import IsLogged from './components/isLogged';
import { AuthProvider } from './context/auth.context';




function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element= {<SignUpPage/>}/>
        <Route path='/camps' element= {<CampingsListPage/>}/>
        <Route path='/create/camp' element= {<CreateCampingPage/>}/>
        <Route path='/edit/camp/:campId' element= {<EditCampingPage/>}/>
        <Route path='/camps/:campId' element={<CampingDetailsPage />} />
        <Route path='/edit/users/:userId' element={<EditUserProfilePage />} />
        <Route path='/user/:userId' element={<IsLogged><UserProfilePage/></IsLogged>} />
      </Routes>
      </AuthProvider>
      

      <Footer/>
  
    </div>
  );
}

export default App;
