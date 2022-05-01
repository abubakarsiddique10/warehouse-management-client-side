import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home/Home';
import Phones from './pages/Phones/Phones';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Header from './pages/Shared/Header/Header';
import NotFoun from './pages/NotFoun/NotFoun';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/phones' element={<Phones />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='*' element={<NotFoun />} />
      </Routes>
    </div>
  );
}

export default App;
