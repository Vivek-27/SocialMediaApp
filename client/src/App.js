import {
  BrowserRouter,
  Route,
  Routes,
  useHref,
  useNavigate
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './components/Auth/Login';
import './App.css';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import Explore from './pages/Explore/Explore';
import { useEffect } from 'react';
import Chat from './pages/Chat/Chat';
import Notification from './pages/Notification/Notification';
import MessageScreen from './pages/Chat/MessageScreen';
import { Switch } from '@mui/material';

const user = localStorage.getItem('user');

const Routing = () => {
  const user = localStorage.getItem('user');
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
      <Route path="/chat" element={<Chat />} />
      <Route path="/message-screen/:id" element={<MessageScreen />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routing />
        {user && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
