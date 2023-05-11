import { useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { searchMovies, searchPeople } from "./searchApi";
import { SearchWrapper, SearchBar, StyledSearchIcon, SearchBarInput } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../../../core/QueryBox/useQueryParameter";
import { searchQueryParamName } from "../../../core/QueryBox/queryParamName";

export const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);
    const inputRef = useRef(null);
    const timerRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = query || '';
    }, [query]);

    const selectInputText = () => {
        inputRef.current.select();
    };

    const onInputChange = (event) => {
        const inputValue = event.target.value.trim() !== "" ? event.target.value : undefined;

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            const searchEndpoint = location.pathname.includes("/people")
                ? searchPeople
                : searchMovies;

            searchEndpoint(inputValue).then((results) => {
                searchParams.set(searchQueryParamName, inputValue);

                if (results.length > 0) {
                    const firstResult = results[0];
                    const pathname = location.pathname.includes("/people")
                        ? `/person/${firstResult.id}`
                        : location.pathname;

                    history.push({
                        pathname,
                        search: searchParams.toString(),
                    });
                } else {
                    history.push({
                        pathname: location.pathname,
                        search: "",
                    });
                }
            });
        }, 1000);
    };

    return (
        <SearchWrapper>
            <SearchBar>
                <StyledSearchIcon />
            </SearchBar>
            <SearchBarInput
                placeholder={
                    location.pathname.includes("movie")
                        ? "Search for movies..."
                        : "Search for people..."
                }
                defaultValue={query || ''}
                ref={inputRef}
                onFocus={selectInputText}
                onChange={onInputChange}
            />
        </SearchWrapper>
    );
};