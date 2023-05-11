import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { toMovie, toMovies, toPeople, toPerson, toPeoplePage } from "./routes";
import MovieDetails from "../feature/MovieDetails";
import PeopleList from "../feature/People/PeopleList/List";
import PersonDetails from "../feature/PersonDetails";
import MovieBrowser from "../feature/MovieBrowser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={toMovies()}>
            <MovieBrowser />
          </Route>
          <Route path={toMovie({ movieId: ":movieId" })}>
            <MovieDetails />
          </Route>
          <Route exact path={toPeople()}>
            <PeopleList />
          </Route>
          <Route path={toPerson({ personId: ":personId" })}>
            <PersonDetails />
          </Route>
          <Route path={toPeoplePage({ pageNumber: ":pageNumber" })}>
            <PeopleList />
          </Route>
          <Route>
            <Redirect to={toMovies()} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;