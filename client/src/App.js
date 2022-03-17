
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
import Films from './pages/films/Films';
import Home from './pages/socialMedia/Home';
import Login from './components/login/Login';
import MovieDetail from './pages/films/MovieDetail';
import TvDetail from './pages/films/TvDetail';
import Diary from './pages/films/Diary';
import Watchlist from './pages/films/Watchlist';
import Journal from './pages/films/Journal';
import MainIndex from './pages/music/MainIndex';
import SearchFilm from './pages/films/SearchFilm';
// import SearchMusic from './pages/music/SearchMusic';
import RegisterChat from './pages/chat/RegisterChat'
import LoginChat from './pages/chat/LoginChat'
import Chat from './pages/chat/Chat'
import SetAvatar from './pages/chat/SetAvatar'
import WatchPartyRoutes from './pages/watchParty/WatchPartyRoutes';

function App() {
  return (
    <BrowserRouter>

      <div>
        <Navbar />
      </div>

      <div >
        <Routes>

          <Route path="/*" element={<Home />} />

          <Route path="/films" element={<Films />} />
          <Route path="/searchFilms" element={<SearchFilm />} />
          <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
          <Route path="/tv-detail/:tvId" element={<TvDetail />} />
          <Route path="/watchlist/:userId" element={<Watchlist />} />
          <Route path="/diary/:userId" element={<Diary />} />

          <Route path="/login" element={<Login />} />
          
          <Route path="/journal" element={<Journal />} />
          
          <Route path="/music" element={<MainIndex />} />
          {/* <Route path="/searchMusic" element={<SearchMusic />} /> */}

          <Route path='/chatRegister' element={<RegisterChat />} />
          <Route path='/chatLogin' element={<LoginChat />} />
          <Route path='/setAvatar' element={<SetAvatar />} />
          <Route path='/chat' element={<Chat />} />

          <Route path="/main" element={<Main />} />
          
          <Route path="/watchParty/*" element={<WatchPartyRoutes />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
