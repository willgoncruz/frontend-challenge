import { PureComponent } from 'react';
import styled from 'styled-components';

import BookCover from '../BookCover';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    margin: 0 20px;
    margin-top: 40px;
`;

const BookContainer = styled.div`
    width: 105px;
    max-width: 105px;
    margin-bottom: 12px;
    margin-right: 9px;
`;

const Thumbnail = styled.div`
    width: 100%;
    height: 153px;
`;

const Title = styled.div`
    margin-top: 9px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: rgba(49, 49, 49, 0.8);
`;

const Author = styled.div`
    margin-top: 5px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 10px;
    line-height: 12px;
    color: rgba(49, 49, 49, 0.8);
`;

const BookItem = ({ book }) => {
    return (
        <BookContainer>
            <Thumbnail>
                <BookCover src={book.cover} />
            </Thumbnail>
            <Title>{book.title}</Title>
            <Author>by {book.authors}</Author>
        </BookContainer>
    );
}

export default class BookList extends PureComponent {
    render() {
        const { books } = this.props;
        return (
            <Container>
                {books.map((book, i) => <BookItem key={i} book={book} />)}
            </Container>
        );
    }
}