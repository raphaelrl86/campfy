import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreateCampingPage from './pages/CreateCampingPage';
import SignUpPage from './pages/SignUpPage';
import CampingsListPage from './pages/CampingsListPage';
import CampingDetailsPage from './pages/CampingDetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/signup' element= {<SignUpPage/>}/>
        <Route path='/create/camp' element= {<CreateCampingPage/>}/>
        <Route path='/camps' element= {<CampingsListPage/>}/>
        <Route path='/camps/:campId' element={<CampingDetailsPage />} />
        <Route path='/user/:userId' element={<UserProfilePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
