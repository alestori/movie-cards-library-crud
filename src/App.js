import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
