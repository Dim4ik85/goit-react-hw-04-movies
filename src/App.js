
import React from "react";
import { Router, Switch, Route, Link } from "react-router-dom";

https://api.themoviedb.org/3/movie/550?api_key=d84d15bdfdec192b10fc2c60fd5ff048

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" component = {HomePage} />
          <Route path='/movies' component = {MoviesPage} />
          <Route path='/movies/:movieId' component = {MovieDetailsPage} />
          <Route  />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
