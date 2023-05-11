import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import { Wrapper, SectionTitle, DetailsWrapper } from './styled';
import PersonTile from './PersonDeatilsPage/PersonTile';
import Cast from '../../feature/PersonDetails/PersonDeatilsPage/Cast';
import Crew from '../../feature/PersonDetails/PersonDeatilsPage/Crew';
import Loading from "../../common/States/Loading/LoadingSpinner";
import ErrorBox from "../../common/ErrorBox";

const PersonDetails = () => {

  const { personId } = useParams();
  const [personDetails, setPersonDetails] = useState(null);
  const [error, setError] = useState(null); // new state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=d3f19b5007aaab7cb579f83b9a664dec&language=en-US&append_to_response=movie_credits`);
        const result = await response.json();
        setPersonDetails(result);
      } catch (error) {
        console.error(error);
        setError(error); // error setting
      }
    };

    fetchData();
  }, [personId]);

  if (error) { // if there is an error, show ErrorBox component
    return <ErrorBox error={error} />;
  }

  if (!personDetails) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <Wrapper>
      <DetailsWrapper>
        <PersonTile person={personDetails} />
        {personDetails.movie_credits.cast.length > 0 && (
  <>
    <SectionTitle>Movies - cast ({personDetails.movie_credits.cast.length})</SectionTitle>
    <Cast cast={personDetails.movie_credits.cast} />
  </>
)}

{personDetails.movie_credits.crew.length > 0 && (
  <>
    <SectionTitle>Movies - crew ({personDetails.movie_credits.crew.length})</SectionTitle>
    <Crew crew={personDetails.movie_credits.crew} />
  </>
)}
      </DetailsWrapper>
    </Wrapper>
  );
};

export default PersonDetails;