import { PureComponent } from 'react';
import styled from 'styled-components';

import BookCover from '../BookCover';

import { Link } from "react-router-dom";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: fit-content;

    margin: 0 20px;
    margin-top: 40px;
    margin-bottom: 59px;
`;

const BookContainer = styled.div`
    width: 105px;
    max-width: 105px;
    margin-bottom: 12px;
    margin-right: 9px;

    &:nth-child(3n+3) {
        margin-right: 0px;
    }
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

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const BookItem = ({ book }) => {
    return (
        <BookContainer>
            <StyledLink to={`/details/${book.id}`}>
                <Thumbnail>
                    <BookCover src={book.cover} />
                </Thumbnail>
                <Title>{book.title}</Title>
                <Author>by {book.authors}</Author>
            </StyledLink>
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