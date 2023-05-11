import { useQueryParameter } from "../../../core/QueryBox/useQueryParameter";
import { searchQueryParamName } from "../../../core/QueryBox/queryParamName"
import { LoadingContainer, LoadingWrapper, LoadingText, LoadingSpinner } from "./styled";

const LoadingSearchResults = () => {
    const query = useQueryParameter(searchQueryParamName);

    return (
        <LoadingContainer>
            <LoadingWrapper>
                <LoadingText title={!query ? "" : `Search results for "${query}"`} />
                <LoadingSpinner />
            </LoadingWrapper>
        </LoadingContainer>
    );
};

export default LoadingSearchResults;