import { Wrapper, List, Tile, Poster, ActorName, ActorRole, StyledLink } from "./styled";
import noPicture from '../../../../common/Images/noPicture.svg';
import { toPerson } from "../../../../core/routes";


export const Cast = ({ cast }) => {

    return (
        <>
            {cast && cast.length > 0 && (
                <Wrapper>
                    {cast.map(({ profile_path, id, name, character }) => (
                        <List key={id}>
                            <StyledLink to={toPerson({ personId: id })}>
                                <Tile>
                                    <Poster
                                        src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                                        alt={name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = noPicture;
                                        }}
                                    />
                                    <ActorName>{name}</ActorName>
                                    <ActorRole>{character}</ActorRole>
                                </Tile>
                            </StyledLink>
                        </List>
                    ))}
                </Wrapper>
            )}
        </>
    );
};

export default Cast;