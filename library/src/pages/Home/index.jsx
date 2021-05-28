import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { DiscoverContext } from '../../context';
import Card from '../../components/DiscoverCard';
import Reading from '../../components/Reading';

const Container = styled.div`
    position: relative;
    display: inline-block;
`;

const Greetings = styled.div`
    display: inline-block;
    height: 29px;

    margin: 0 20px;
    margin-top: 30px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;

    color: #54565A;
`;

const Name = styled.span`
    font-weight: bold;
    color: #FF6978;
`;

const Discover = styled.div`
    display: inline-block;
    margin: 0 20px;
    margin-top: 30px;
    overflow-x: auto;
`;

const Title = styled.div`
    height: 21px;

    font-family: SF Pro Display;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.5px;

    color: #3F4043;
`;

const Carousel = styled.div`
    width: 200%;
    margin-top: 15px;
    overflow-x: auto;
`;

export default observer(() => {
    const store = useContext(DiscoverContext);

    useEffect(() => {
        store.reset();
        store.getBookByID('R42aBAAAQBAJ');
        store.getBookByID('R42aBAAAQBAJ');
        store.readingBookByID('R42aBAAAQBAJ');
    }, [store]);

    return (
        <Container>
            <Greetings>Hi, <Name>Mehmed Al Fatih</Name></Greetings>

            <Discover>
                <Title>Discover new books</Title>

                <Carousel>
                    { store.books.map((book, i) => <Card key={i} book={book} />) }
                </Carousel>
            </Discover>

            <Reading book={store.reading} />
        </Container>
    );
});