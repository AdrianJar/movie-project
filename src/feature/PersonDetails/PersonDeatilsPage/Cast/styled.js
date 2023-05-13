import styled from "styled-components";

export const Wrapper = styled.div`
    width: 1368px;
    width: 100%;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    grid-gap: 24px;
@media(max-width: ${({ theme }) => theme.breakpoints.large}px) {
    grid-template-columns: repeat(auto, 1fr);
}
@media(max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
    grid-template-columns: repeat(auto, 1fr);
    margin: 12px auto 0;
}
`;

export const List = styled.div`
    list-style: none;
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        padding: 0 10px;
    }
`;

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    max-width: 324px;
    height: auto;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    font-size: 22px;
`;

export const Poster = styled.img`
    max-width: 292px;
    height: 434px;
    border-radius: 5px;
    margin-bottom: 16px;
    `;

export const ActorName = styled.p`
    text-align: left;
    word-wrap: wrap;
    line-height: 1.3;
    font-weight: 500;
    font-size: 22px;
    margin: 0;
`;
export const ActorRole = styled.p`
    text-align: left;
    word-wrap: wrap;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.stormGrey};
    margin: 0px 10px 0px 0px;
    line-height: 1.5;    

`;

export const GenresList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

export const Genre = styled.div`
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 5px;
    line-height: 1.4;
    font-weight: 400;
    background-color: rgb(228, 230, 240);
    text-align: center;
    color: ${({ theme }) => theme.colors.woodSmoke};
`;