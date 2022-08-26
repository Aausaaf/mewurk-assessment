import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Page/Home/Home';
import Contacts from './Page/Contacts/Contacts';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
    <Navbar/>

     <Routes>

      <Route path="/" element={<Home/>}/>

      <Route path="/contactdetails" element={<Contacts/>}/>

      </Routes> 

    </>
    
  );
}

export default App;
