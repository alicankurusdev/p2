import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Route, BrowserRouter as Router,  Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
<Router>
  <Routes>
<Route path='/' element={<Home />}/>
 

  </Routes>

</Router>

    </div>
  );
}

export default App;
