import React from 'react';
import { data } from "./data";
import { Wrapper, PeopleList, Item, Tile, Poster, Title } from "./styled";

const PopularPeopleList = () => {

    const people = data.people

    return (
        <Wrapper>
            <PeopleList>
                {people.map((people) =>
                <Item key={people}>
                    <Tile>
                        <Poster src={people.poster} alt={people.name} />
                        <Title>{people.name}</Title>
                    </Tile>
                </Item>
                )}
            </PeopleList>
        </Wrapper>
    );
}
export default PopularPeopleList;