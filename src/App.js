
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import ViewRest from './components/ViewRest';
 import Operatingtime from './components/Operatingtime';                     
function App() {
  return (
    <div className="App">
     <Router>

      <Header></Header>

      <Routes>
        {/* PATH SETTING FOR RestaurAnt list */}
        <Route path='/' element={<Restaurentlist/>}/>
     
          {/* PATH SETTING FOR view rest */}
          <Route path='/view-restaurant/:id' element={ <ViewRest/>}/>

     
     
      </Routes>

      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
