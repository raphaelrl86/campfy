import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CreateCampingPage from './pages/CreateCampingPage';
import SignUpPage from './pages/SignUpPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/signup' element= {<SignUpPage/>}/>
        <Route path='/create/camp' element= {<CreateCampingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
