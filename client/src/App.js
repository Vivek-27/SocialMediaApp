import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './components/Auth/Login';
import './App.css';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import Explore from './pages/Explore/Explore';
import { useEffect } from 'react';

const user = localStorage.getItem('user');

const Routing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
    } else {
      navigate('/auth');
    }
  }, [user]);
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
        {user ? <Footer /> : ''}
      </BrowserRouter>
    </div>
  );
}

export default App;
