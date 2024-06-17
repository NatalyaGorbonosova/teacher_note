import './styles/style.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import AddStudent from './pages/AddStudent';
import { Helmet } from "react-helmet";
import InfoStudent from './pages/InfoStudent';

function App() {
  return (
    <>
    {/*   <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}
      <Router>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/add-student' element={<AddStudent />} />
            <Route path='/students/:id' element={<InfoStudent />} ></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
