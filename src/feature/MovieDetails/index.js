import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper, SectionTitle, DetailsWrapper } from './styled';
import { fetchMovieDetails, selectCast, selectCrew, selectMovieDetails, selectStatus } from './movieDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from './MovieDeatilsPage/Backdrop';
import Cast from './MovieDeatilsPage/Cast';
import Crew from './MovieDeatilsPage/Crew';
import MovieTile from './MovieDeatilsPage/MovieTile';
import LoadingSearchResults from '../../common/States/Loading/LoadingSearchResult';
import NoResults from "../../common/NoResults";
import ErrorBox from "../../common/ErrorBox";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { movieId } = useParams();

    useEffect(() => {
        dispatch(fetchMovieDetails({ id: movieId }));
    }, [dispatch, movieId]);

    const movieDetails = useSelector((state) => selectMovieDetails(state));
    const cast = useSelector((state) => selectCast(state));
    const crew = useSelector((state) => selectCrew(state));
    const status = useSelector((state) => selectStatus(state));

    if (status === "loading") {
        return <LoadingSearchResults />;
    }

    if (status === "failed") {
        return <ErrorBox />;
    }

    if (status === "noresult") {
        return <NoResults />;
    }

    return (
        <>
            {movieDetails && movieDetails.backdrop_path &&
                <Backdrop
                    original_title={movieDetails.original_title}
                    backdrop_path={movieDetails.backdrop_path}
                    vote_average={movieDetails.vote_average}
                    vote_count={movieDetails.vote_count}
                />}
            <Wrapper>
                <DetailsWrapper>
                    {movieDetails && movieDetails.title &&
                        <MovieTile movie={movieDetails} />}
                    {cast && cast.length > 0 && (
                        <>
                            <SectionTitle >Cast</SectionTitle>
                            <Cast cast={cast} />
                        </>
                    )}
                    {crew && crew.length > 0 && (
                        <>
                            <SectionTitle>Crew</SectionTitle>
                            <Crew crew={crew} />
                        </>
                    )}
                </DetailsWrapper>
            </Wrapper>
        </>
    );
};

export default MovieDetails;