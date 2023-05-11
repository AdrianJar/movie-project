import { LoadingContainer, LoadingWrapper, LoadingSpinner } from "./styled";

const LoadingSpinnerOnly = () => {
    return (
        <LoadingContainer>
            <LoadingWrapper>
                <LoadingSpinner />
            </LoadingWrapper>
        </LoadingContainer>
    );
};

export default LoadingSpinnerOnly;