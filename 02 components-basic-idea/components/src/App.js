import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {
  const movies = [
    { title: 'Man of Steel', year: 2005, cast: ['Henry Cavil', 'Russell Crowe'] },
    { title: 'Harry Potter', year: 2007, cast: ['Daniel Radcliffe', 'Emma Watson'] },
    { title: 'The Lord of the Rings', year: 2002, cast: ['Orlando Bloom', 'Elijiah Wood', 'Viggo Mortensen'] }
  ]
  return (
    <div className="App">
      <h1>React Demo</h1>

      <Counter canReset />

      <Timer start={0} />
    
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
