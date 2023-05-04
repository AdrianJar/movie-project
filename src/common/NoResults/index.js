import { ReactComponent as Picture } from "../NoResults/noResultsIcon.svg";
import { Disclaimer, PictureWrapper, Wrapper } from "./styled";

const NoResults = ({query}) => {
  return (
    <Wrapper>
      <Disclaimer>Sorry, there are no results for "{query} "</Disclaimer>
      <PictureWrapper>
        <Picture />
      </PictureWrapper>
    </Wrapper>
  );
};

export default NoResults;