
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';

import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
   <div>   
    <Router>
  
      <HeaderComponent/>
    <div className="container">
      <Routes>
      <Route path='/' exact element={<ListEmployeeComponent/>} />
      <Route path='/employees' element={<ListEmployeeComponent/>} />
      <Route path='/add-employee' element={<CreateEmployeeComponent/>} />
      <Route path='/update-employee/:id' element={<UpdateEmployeeComponent/>} />
      </Routes>
    </div>
    
    <FooterComponent/>
    </Router>
    </div>
  );
}

export default App;
