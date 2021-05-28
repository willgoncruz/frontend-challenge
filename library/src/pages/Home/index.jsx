import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { DiscoverContext } from '../../context';
import Card from '../../components/DiscoverCard';
import BookCover from '../../components/BookCover';

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

const Reading = styled.div`
    display: inline-block;
    margin-top: 30px;
`;

const CurrentlyReading = styled.div`
    height: 21px;
    margin: 0 20px;

    font-family: SF Pro Display;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.5px;

    color: #3F4043;
`;

const Background = styled.div`
    display: inline-block;
    position: relative;

    width: 331px;
    height: 100px;
    margin-top: 30px;

    background: #EEF5DB;
    box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
    border-radius: 0px 3px 3px 0px;
`;

const ReadingImage = styled.div`
    position: absolute;
    width: 91px;
    height: 136px;
    top: -19px;
    left: 19px;
`;

const InformationPanel = styled.div`
    margin-top: 10px;
    margin-left: 118px;
`;

const BookTitle = styled.div`
    height: 27px;

    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 2px;

    color: #2A2B26;
`;

const Author = styled.div`
    height: 12px;
    margin-top: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;

    color: #74776D;
`;

export default observer(() => {
    const store = useContext(DiscoverContext);

    useEffect(() => {
        store.getBookByID('R42aBAAAQBAJ');
        store.getBookByID('R42aBAAAQBAJ');
        store.readingBookByID('R42aBAAAQBAJ');
    }, []);

    return (
        <Container>
            <Greetings>Hi, <Name>Mehmed Al Fatih</Name></Greetings>

            <Discover>
                <Title>Discover new books</Title>

                <Carousel>
                    { store.books.map((book, i) => <Card key={i} book={book} />) }
                </Carousel>
            </Discover>

            <Reading>
                <CurrentlyReading>Currently Reading</CurrentlyReading>
                <Background>
                    <ReadingImage>
                        <BookCover src={store.reading.cover}></BookCover>
                    </ReadingImage>

                    <InformationPanel>
                        <BookTitle>{store.reading.title}</BookTitle>
                        <Author>by {store.reading.authors}</Author>
                    </InformationPanel>
                </Background>
            </Reading>
        </Container>
    );
});