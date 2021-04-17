import './App.css';
import { MovieListProvider } from './components/movies/MovieContext';
import MovieList from './components/movies/Movielist'
import MovieForm from './components/movies/MovieForm'


function App() {
  return (
    <MovieListProvider>
      <div className="App">
        <MovieList />
        <MovieForm />
      </div>
    </MovieListProvider>

  );
}

export default App;
