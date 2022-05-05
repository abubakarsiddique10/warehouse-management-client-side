import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home/Home';
import Phones from './pages/Phones/Phones';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Header from './pages/Shared/Header/Header';
import NotFoun from './pages/NotFoun/NotFoun';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Loading from './pages/Shared/Loading/Loading';
import Inventory from './pages/Inventory/Inventory';
import UpdateQuantity from './pages/UpdateQuantity/UpdateQuantity';
import ManageInventories from './pages/ManageInventories/ManageInventories';
import ManageInventory from './pages/ManageInventory/ManageInventory';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/blog' element={
          <RequireAuth>
            <Blog />
          </RequireAuth>
        } />
        <Route path='/inventory/:id' element={<Inventory />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='loading' element={<Loading></Loading>} />
        <Route path='/update' element={<UpdateQuantity />} />
        <Route path='/ManageInventories' element={<ManageInventories />} />
        <Route path='/manageInventory' element={<ManageInventory />} />
        <Route path='*' element={<NotFoun />} />
      </Routes>
    </div>
  );
}

export default App;
