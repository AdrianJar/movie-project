import styled from "styled-components";

export const LoadingContainer = styled.div`
 padding: 56px 16px 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 26px 16px 28px;
  }
`;

export const LoadingWrapper = styled.div`
max-width: 1368px;
margin: auto;
display: flex;
flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 320px;
  }
`;

export const LoadingText = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin: 0px 0px 120px 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 20px 0px 20px 0px;
    max-width: 1368px;
    font-size: 22px;
    word-break: break-word;
  }
@media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin: 20px 0px 20px 0px;
    font-size: 18px;
    word-break: break-word;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin: 18px 0 18px 0px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.3;
    word-break: break-word;
  }
`;

export const LoadingSpinner = styled.div`
  border: 12px solid ${({ theme }) => theme.colors.snuff};
  border-top: 12px solid ${({ theme }) => theme.colors.black};
  width: 91px;
  height: 91px;
  margin: 0px 0px 80px 30px;
  border-radius: 50%;
  display: flex;
  align-self: center;
  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count:  infinite;
   @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 71px;
    height: 71px;
    border: 10px solid ${({ theme }) => theme.colors.snuff};
    border-top: 10px solid ${({ theme }) => theme.colors.black};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
    width: 51px;
    height: 51px;
    border: 6px solid ${({ theme }) => theme.colors.snuff};
    border-top: 6px solid ${({ theme }) => theme.colors.black};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
    margin-top:12px;
    width: 31px;
    height: 31px;
    border: 4px solid ${({ theme }) => theme.colors.snuff};
    border-top: 4px solid ${({ theme }) => theme.colors.black};
  }
`;
