import Navi from './partials/Navi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import CreateAccount from './components/Pages/CreateAccount';
import Login from './components/Pages/Login';
import Deposit from './components/Pages/Deposit';
import Withdraw from './components/Pages/Withdraw';
import AllData from './components/Pages/AllData';
import { AuthProvider } from './components/contexts/authContext';
import './App.css';



function App() {
  return (
    <div className="App">
       <AuthProvider>
      <Router>
      <Navi />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/createaccount' element={<CreateAccount/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/deposit' element={<Deposit/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/alldata' element={<AllData/>}/> 
      </Routes>
      </Router>  
      </AuthProvider>
   </div>
   )

};

export default App;
