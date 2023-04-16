import React from 'react';
import { Header, Wrapper } from './styled';
import PopularPeopleList from './PeopleList/List';

const PeopleList = () => {
    return (
        <Wrapper>
            <Header>Popular people</Header>
            <PopularPeopleList />
        </Wrapper>
    );
};

export default PeopleList