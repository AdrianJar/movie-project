import { useSelector } from "react-redux"
import MovieTile from "./MovieTile"
import { Item, StyledLink, Wrapper } from "./styled"
import { selectGenres } from "../../movieListSlice"
import { Header } from "../../../styled"
import NoResults from "../../../../../../common/NoResults"
import { useQueryParameter } from "../../../../../../core/QueryBox/useQueryParameter"

const Data = ({ movies }) => {

    const query = useQueryParameter() || null;
    const genres = useSelector(selectGenres)

    return (
        <>
            {!movies.length ? (
                <NoResults />
            ) : (
                <>
                    <Header>{query ? `Search results for "${query}"` : "Popular movies"}</Header>
                    <Wrapper>
                        {movies.map((movie) =>
                            <Item key={movie.id}>
                                <StyledLink to={`/movies${movie.id}`}>
                                    <MovieTile
                                        movie={movie}
                                        genres={genres}
                                    />
                                </StyledLink>
                            </Item>
                        )}
                    </Wrapper >
                </>
            )
            }
        </>
    )
}

export default Data