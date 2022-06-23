import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AllUser from './components/AllUser'
import Navbar from './components/Navbar'
import AddUser from './components/AddUser'
import Edit from './components/Edit'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/alluser' element={<AllUser/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/editUser/:id' element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
