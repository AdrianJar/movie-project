import styled from "styled-components";
import noPoster from "../Images/noPoster.svg"

export const Tile = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    display: grid;
    grid-template-rows: auto 1fr;
    transition: 0.5s;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 1);
    border-radius: 5px;
    padding: 16px;
    &:hover{
        transform: scale(1.05);
        box-shadow: ${({ theme }) => theme.hoverShadow};
    }
    &:active{
        box-shadow: ${({ theme }) => theme.activeShadow};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: auto 1fr; 
    }
`;

export const PosterWrapper = styled.div`
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2 / 3;
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    flex-basis: auto; 
    background-image: url(${noPoster});
    background-size: 80%;
    background-color: ${({ theme }) => theme.colors.silver};
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        height: fit-content;
    }
`;

export const Poster = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2/3;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: grid;
        grid-template-columns: auto 1fr;
        padding-right: 0px;
        width: 140px;
        height: fit-content;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        width: 120px;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-left: 8px;
        gap: 4px;
    }
`;

export const DetailsGrid = styled.div`

`;


export const Title = styled.h2`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.woodSmoke};
    margin: 16px 0 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 0 0 0 8px;
        font-size: 18px;
        line-height: 1.1;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 14px;
    }
`;

export const Year = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    color: ${({ theme }) => theme.colors.waterloo};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin: 0 0 0 8px;
        font-size: 14px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        font-size: 12px;
    }
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
    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin: 0 0 0 8px;
        font-size: 8px;
    }
`;