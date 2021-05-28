import styled from 'styled-components';
import BookCover from '../../components/BookCover';
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default function ReadingComponent({ book }) {
    return(
        <Reading>
            <CurrentlyReading>Currently Reading</CurrentlyReading>
            <StyledLink to={`/details/${book.id}`}>
                <Background>
                    <ReadingImage>
                        <BookCover src={book.cover}></BookCover>
                    </ReadingImage>

                    <InformationPanel>
                        <BookTitle>{book.title}</BookTitle>
                        <Author>by {book.authors}</Author>
                    </InformationPanel>
                </Background>
            </StyledLink>
        </Reading>
    );
};