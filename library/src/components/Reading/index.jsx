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

const ChapterContainer = styled.div`
    margin-top: 20px;
    display: inline-block;
`;

const Chapter = styled.div`
    height: 12px;
    margin-left: 5px;
    display: inline;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.020635px;

    color: #2A2B26;
`;

const BookSVG = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
        <g id="#031">
        <path id="&#231;&#159;&#169;&#229;&#189;&#162;" fillRule="evenodd" clipRule="evenodd" d="M4.66666 8.00002C4.66666 8.51822 5.23198 8.83829 5.67633 8.57168L7 7.77748L8.32367 8.57168C8.76802 8.83829 9.33333 8.51822 9.33333 8.00002V1.33335C9.33333 0.965164 9.03485 0.666687 8.66666 0.666687H5.33333C4.96514 0.666687 4.66666 0.965164 4.66666 1.33335V8.00002ZM6.657 6.42836L6 6.82256V2.00002H8V6.82256L7.34299 6.42836C7.13187 6.30169 6.86812 6.30169 6.657 6.42836Z" fill="#E66CFF" fillOpacity="0.98"/>
        <path id="&#232;&#183;&#175;&#229;&#190;&#132;" d="M3.33333 2.00002H10.6667C11.7712 2.00002 12.6667 2.89545 12.6667 4.00002V12C12.6667 13.1046 11.7712 14 10.6667 14H4C3.63181 14 3.33333 14.2985 3.33333 14.6667C3.33333 15.0349 3.63181 15.3334 4 15.3334H10.6667C12.5076 15.3334 14 13.841 14 12V4.00002C14 2.15907 12.5076 0.666687 10.6667 0.666687H2.66667C2.29848 0.666687 2 0.965164 2 1.33335V12C2 12.3682 2.29848 12.6667 2.66667 12.6667C3.03486 12.6667 3.33333 12.3682 3.33333 12V2.00002Z" fill="#9013FE"/>
        <circle id="&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;" cx="10.6667" cy="12" r="0.666667" fill="#FF9F00"/>
        </g>
        </svg>
    );
};

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

                        <ChapterContainer>
                            <BookSVG />
                            <Chapter>Chapter 2 From 9</Chapter>
                        </ChapterContainer>
                    </InformationPanel>
                </Background>
            </StyledLink>
        </Reading>
    );
};