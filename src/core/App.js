import { HashRouter, Route, Switch } from "react-router-dom";
import { Header } from "../common/Header";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import MoviesList from "../feature/MovieBrowser/Movies";
import PeopleList from "../feature/People/PeopleList/List";
import PersonDetails from "../feature/PersonDetails";
import MovieDetails from "../feature/MovieDetails";

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={toMovie()} name="movie" component={MovieDetails} />
        <Route exact path={toMovies()} name="movies" component={MoviesList} />
        <Route path={toPerson()} name="person" component={PersonDetails} />
        <Route path={toPeople()} name="people" component={PeopleList} />
        <Route path="/" component={MoviesList} />
      </Switch>
    </HashRouter>
  );
}

export default App;