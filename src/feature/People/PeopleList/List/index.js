import React, { useState, useEffect } from 'react';
import { Wrapper, PeopleList, Item, Tile, Poster, Title, StyledLink, Header } from './styled';
import { Pagination } from "../../../../common/Pagination";
import Loading from '../../../../common/States/Loading/LoadingSpinner';
import noPicture from '../../../../common/Images/noPicture.svg';
import ErrorBox from '../../../../common/ErrorBox';

const PeopleListPage = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false); // new state

  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/popular?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&page=${currentPage}`
        );
        const data = await response.json();
        setTimeout(() => {
          setPeople(data.results);
          setTotalPages(data.total_pages);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error);
        setHasError(true); // set hasError to true in case of an error
      }
    };
    fetchPopularPeople();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
    //adding function which can show the number of page in the URL:
    const url = `${window.location.origin}${window.location.pathname}?page=${pageNumber}`;
    window.history.pushState({ path: url }, '', url);
  };

  if (hasError) { // if an error occurred, display ErrorBox component
    return <ErrorBox />;
  }

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>Popular people</Header>
          <PopularPeopleList people={people} loading={loading} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            loading={loading}
          />
        </>
      )}

    </Wrapper>
  );
};

const PopularPeopleList = ({ people, loading }) => {
  return (
    <PeopleList>
      {people.map((person) => (
        <Item key={person.id}>
          <StyledLink to={`/person/${person.id}`}>
            <Tile>
              <Poster
                className="no-picture"
                src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                alt={person.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = noPicture;
                }}
              />
              <Title>{person.name}</Title>
            </Tile>
          </StyledLink>
        </Item>
      ))}
    </PeopleList>
  );
};

export default PeopleListPage;