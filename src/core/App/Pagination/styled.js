import styled, { css, keyframes } from "styled-components";
import { ReactComponent as prevVector } from "./images/prevVector.svg";
import { ReactComponent as nextVector } from "./images/nextVector.svg";

const mobileBp = ({ theme }) => theme.breakpoints.mobileMax;

const movement = keyframes`
     0% {
    transform: translateX(0px);
    }
  25% {
    transform: translateX(-3px);
    }
  50% {
    transform: translateX(0px);
    }
  75% {
    transform: translateX(3px);
    }
  100% {
    transform: translateX(0px);
    }
`;


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 103px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-right: 12px;
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.1s;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.mystic};
    pointer-events: none;
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.linkWater};
  }
  @media (max-width: ${mobileBp}px) {
    margin-right: 8px;
  } ;
`;

export const PrevVectorIcon = styled(prevVector)`
  margin: 0 4px;
  color: ${({ theme }) => theme.colors.scienceBlue};
  ${({ mobile }) =>
    mobile &&
    css`
      display: none;
    `};
  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  ${Button}:hover & {
    animation: ${movement} 1s linear infinite;
  }

  @media (max-width: ${mobileBp}px) {
    display: block;
  } ;
`;

export const ButtonText = styled.p`
  margin: 0 4px;
  @media (max-width: ${mobileBp}px) {
    display: none;
  } ;
`;

export const PageCounter = styled.div`
  margin: 0 24px 0 16px;
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  line-height: 150%;
  @media (max-width: ${mobileBp}px) {
    font-size: 10px;
    line-height: 24px;
    margin: 0 8px 0 0;
  } ;
`;

export const PageNumbers = styled.span`
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  @media (max-width: ${mobileBp}px) {
    font-weight: 600;
    font-size: 10px;
    line-height: 24px;
    margin: 0 2px;
  } ;
`;

export const NextVectorIcon = styled(nextVector)`
  margin: 0 4px;
  color: ${({ theme }) => theme.colors.scienceBlue};
  ${({ mobile }) =>
    mobile &&
    css`
      display: none;
    `};
  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.waterloo};
  }

  ${Button}:hover & {
    animation: ${movement} 1s linear infinite;
  }

  @media (max-width: ${mobileBp}px) {
    display: block;
  } ;
`;