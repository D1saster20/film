import {Header} from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import {Route, Routes} from "react-router-dom";
import MoviesGenre from "./components/MoviesGenre/MoviesGenre";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import {SearchGenre} from "./components/SearchGenre/SearchGenre";
import Search from "./components/Search/Search";



function App() {
  return (
      <div>
      <Header/>
      <Routes>
          <Route exact path={'/'} element={<MoviesList/>}/>
          <Route path={'/genre'} element={<MoviesGenre/>}/>
          <Route path="/movies/:id" element={<MovieInfo/>}/>
          <Route path={'/genre/:id'} element={<SearchGenre/>}/>
          <Route path={'/search'} element={<Search/>}/>

      </Routes>
      </div>
  );
}

export default App;
