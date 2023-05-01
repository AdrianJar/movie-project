import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import MoviesList from "../feature/MovieBrowser/Movies";
import MovieDetails from "../feature/MovieDetails";
import Peoplelist from "../feature/People";

function App() {
  const id = "movieId";

  return (
    <>
      <Header />
      <Switch>
        <Route path={toMovies()}>
          <MoviesList />
        </Route>
        <Route path={toMovie({ movieId: id })}>
          <MovieDetails />
        </Route>
        <Route path={toPeople()}></Route>
        <Peoplelist />
        <Route path={toPerson({ personId: "personId" })}></Route>
        <Route>
          <Redirect to={toMovies()} />
        </Route>
      </Switch>
    </>
  );
}

export default App;