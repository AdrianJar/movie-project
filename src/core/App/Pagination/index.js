import {
  PageCounter,
  ButtonText,
  PrevVectorIcon,
  Wrapper,
  PageNumbers,
  Button,
  NextVectorIcon,
} from "./styled";

export const Pagination = ({ totalPages, page, setPage}) => {
  return (
    <Wrapper>
      <Button 
      disabled={page === 1} onClick={() => setPage(1)}>
        <PrevVectorIcon />
        <PrevVectorIcon mobile ="true" />
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        <PrevVectorIcon />
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageCounter>
        Page
        <PageNumbers>{page}</PageNumbers>
        of
        <PageNumbers>{totalPages > 500 ? 500 : totalPages}
        </PageNumbers>
      </PageCounter>
      <Button
      nextdisabled={page === (totalPages > 500 ? 500 : totalPages)}
      onClick={() => setPage(page + 1)}>
        <ButtonText>Next</ButtonText>
        <NextVectorIcon />
      </Button>
      <Button
      next={page === (totalPages > 500 ? 500 : totalPages)}
      onClick={() => setPage(totalPages > 500 ? 500 : totalPages)}>
        <ButtonText>Last</ButtonText>
        <NextVectorIcon />
        <NextVectorIcon mobile="true"/>
      </Button>
    </Wrapper>
  )
}