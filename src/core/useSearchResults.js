import { createContext, useState, useContext } from "react";

export const SearchResultsContext = createContext({
    searchResults: null,
    setSearchResults: () => { },
});

export const SearchResultsProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState(null);

    return (
        <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
            {children}
        </SearchResultsContext.Provider>
    );
};

export const useSearchResults = () => useContext(SearchResultsContext);