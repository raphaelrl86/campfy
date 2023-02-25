import './App.css';
import CreateCampingPage from './pages/CreateCampingPage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/create/camp' element= {<CreateCampingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
