import './styles/style.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import AddStudent from './pages/AddStudent';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/add-student' element={<AddStudent />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
