import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddNewItem from './pages/AddNewItem/AddNewItem';
import Blog from './pages/Blog/Blog';
import Customers from './pages/Customers/Customers';
import Home from './pages/Home/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Login from './pages/Login/Login';
import MyItem from './pages/MyItem/MyItem';
import NotFoun from './pages/NotFoun/NotFoun';
import ManageInventories from './pages/Phones/ManageInventories';
import Registration from './pages/Registration/Registration';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Header from './pages/Shared/Header/Header';
import UpdateQuantity from './pages/UpdateQuantity/UpdateQuantity';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='registration' element={<Registration />} />
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path='/ManageInventories' element={<ManageInventories />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addnewitem' element={<AddNewItem />} />
        <Route path='/myItem' element={<MyItem />} />
        <Route path='/update/:id' element={<UpdateQuantity />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='customers' element={<Customers />} />
        <Route path='*' element={<NotFoun />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
