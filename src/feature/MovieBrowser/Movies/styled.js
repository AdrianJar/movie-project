import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div` 
    max-width: 1368px;
    margin: 52px auto 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0 16px;
        margin: 0;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMin}px) {
        padding: 0 12px;
    }
`;

export const Header = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.woodSmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 20px;
    }
`;

export const TileWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
    gap: 24px;

    @media (max-width: ${({theme})=>theme.breakpoints.small}px) {
        grid-template-columns: minmax(200px, 1fr);
    }
`;

export const Item = styled.div`
    text-decoration: none;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 100%;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    
@media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
        width: 100%;
    }
`;
