import React from 'react'
import { Details, DetailsGrid, Genre, GenresList, Poster, PosterWrapper, Tile, Title, Year } from './styled'
import Rating from '../Rating'
import noPoster from '../Images/noPoster.svg'

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
                    <img src={noPoster} alt="no poster available" />
                )}
            </PosterWrapper>
            <Details>
                <DetailsGrid>
                    <Title>{movie.title}</Title>
                    {movie.release_date ? <Year>{movie.release_date.slice(0, 4)}</Year> : ""}
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
                </DetailsGrid>
                <Rating
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                />
            </Details>
        </Tile>
    )
}

export default MovieTile;
