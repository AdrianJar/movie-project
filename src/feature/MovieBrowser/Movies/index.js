import React from 'react'
import { useState, useEffect } from 'react';
import { Pagination } from '../../../common/Pagination'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieTile from '../../../common/MovieTile';
import { Wrapper, Item, TileWrapper, StyledLink, Header } from "./styled";
import { selectGenres } from '../movieBrowserSlice'
import NoResults from '../../../common/NoResults';
import { useQueryParameter } from "../../../core/QueryBox/useQueryParameter";
import { searchQueryParamName } from "../../../core/QueryBox/queryParamName";
import { toMovie } from "../../../core/routes";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${currentPage}`
                );
                const data = await response.json();
                const lastPage = data.total_pages > 500 ? 500 : data.total_pages;
                setMovies(data.results);
                setTotalPages(lastPage);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPopularMovies();
    }, [currentPage]);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        //adding function which can show the number of page in the URL:
        const url = `${window.location.origin}${window.location.pathname}?page=${pageNumber}`;
        window.history.pushState({ path: url }, '', url);
    };

    const history = useHistory();
    const query = useQueryParameter(searchQueryParamName);
    const [filteredMovies, setFilteredMovies] = useState([]);
    // const movies = useSelector(selectMovies);
    const genres = useSelector(selectGenres);

    useEffect(() => {
        setFilteredMovies(
            query
                ? movies.filter((movie) =>
                    movie.title.toLowerCase().includes(query.toLowerCase())
                )
                : movies
        );
    }, [query, movies]);

    const handleClick = (movieId) => {
        history.push(toMovie({ movieId: movieId }));
    };

    return (
        <Wrapper>
            {!movies.length ? (
                <NoResults />
            ) : (
                <>
                    <Header>
                        {!query
                            ? "Popular Movies"
                            : `Search results for "${query}" (${filteredMovies.length})`}
                    </Header>
                    <TileWrapper>
                        {filteredMovies.map((movie) => (
                            <Item key={movie.id}>
                                <StyledLink to={toMovie({ movieId: movie.id })}>
                                    <MovieTile
                                        movie={movie}
                                        genres={genres}
                                        onClick={() => handleClick(movie.id)}
                                    />
                                </StyledLink>
                            </Item>
                        ))}
                    </TileWrapper>
                </>
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange} />
        </Wrapper>
    )
}

export default Movies;