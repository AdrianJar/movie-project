import React from 'react'
import { Details, Genre, GenresList, Poster, PosterWrapper, Tile, Title, Year } from './styled'
import Rating from '../Rating'

const MovieTile = ({ movie, genres }) => {

    return (
        <Tile>
            <PosterWrapper>
                {movie.poster_path ? (
                    <Poster
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                ) : (
                    "123"
                )}
            </PosterWrapper>
            <Details>
                <Title>{movie.title}</Title>
                <Year>{movie.release_date.slice(0, 4)}</Year>
                {movie.genre_ids && genres ? (
                    <GenresList>
                        {movie.genre_ids.map((genre_id) => (
                            <Genre key={genre_id}>
                                {genres[genre_id]}
                            </Genre>
                        ))}
                    </GenresList>
                ) : (
                    ""
                )}
                <Rating
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                />
            </Details>
        </Tile>
    )
}

export default MovieTile