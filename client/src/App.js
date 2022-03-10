
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
// import SearchMusic from './pages/music/SearchMusic';

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
          
          <Route path="/login" element={<Login />} />
          <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
          <Route path="/tv-detail/:tvId" element={<TvDetail />} />
          <Route path="/diary/:userId" element={<Diary />} />
          <Route path="/watchlist/:userId" element={<Watchlist />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/music" element={<MainIndex />} />


          <Route path="/main" element={<Main />} />
          {/* <Route path="/searchMusic" element={<SearchMusic />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
