import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenres, fetchMovie, selectMovieStatus } from './movieBrowserSlice'
import Movies from './Movies';
import LoadingSpinnerOnly from '../../common/States/Loading/LoadingSpinner';
import ErrorBox from '../../common/ErrorBox';

const MovieBrowser = () => {

    const dispatch = useDispatch();

    // const movies = useSelector(selectMovies);
    const movieStatus = useSelector(selectMovieStatus);

    useEffect(() => {
        dispatch(fetchMovie());
        dispatch(fetchGenres());
    }, [dispatch]);

    switch (movieStatus) {
        case "initial":
            return null;

        case "loading":
            return <LoadingSpinnerOnly />;

        case "error":
            return <ErrorBox />;

        case "success":
            return <Movies />;

        default:
            throw new Error(`incorrect status: ${movieStatus}`);
    }
}

export default MovieBrowser