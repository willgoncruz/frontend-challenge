import styled from 'styled-components';

import BookCover from '../BookCover';

import { Link } from "react-router-dom";

const Card = styled.div`
    position: relative;
    display: inline-grid;

    width: 272px;
    height: 139px;
    margin-right: 10px;

    background: #00173D;
    box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
    border-radius: 5px;
`;

const InformationPanel = styled.div`
    display: inline-block;
    margin-left: 20px;
`;

const Title = styled.div`
    margin-top: 17px;

    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 36px;
    letter-spacing: 2px;

    color: #FEFEFE;
`;

const Author = styled.div`
    margin-top: 5px;

    font-family: SF Pro Display;
    font-size: 14px;
    font-style: italic;
    line-height: 16px;
    letter-spacing: 1.28889px;

    color: #E7E7E1;
`;

const ReadNow = styled.div`
    margin-top: 30px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.020635px;

    color: #E7E7E1;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const ReadNowCount = styled.div`
    display: inline;
    margin-left: 2px;
    vertical-align: middle;
`;

const Image = styled.div`
    position: absolute;

    width: 72px;
    height: 111px;

    top: 15px;
    left: 180px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const GraphSVG = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
            <g id="#035">
                <path id="&#232;&#183;&#175;&#229;&#190;&#132;" d="M2.66667 11.3333V3.66665C2.66667 3.11436 3.11438 2.66665 3.66667 2.66665H12.3333C12.8856 2.66665 13.3333 3.11436 13.3333 3.66665V12.3333C13.3333 12.8856 12.8856 13.3333 12.3333 13.3333H3.33333C2.96514 13.3333 2.66667 13.6318 2.66667 14C2.66667 14.3682 2.96514 14.6666 3.33333 14.6666H12.3333C13.622 14.6666 14.6667 13.622 14.6667 12.3333V3.66665C14.6667 2.37798 13.622 1.33331 12.3333 1.33331H3.66667C2.378 1.33331 1.33333 2.37798 1.33333 3.66665V11.3333C1.33333 11.7015 1.63181 12 2 12C2.36819 12 2.66667 11.7015 2.66667 11.3333Z" fill="white" fillOpacity="0.653491"/>
                <path id="&#231;&#155;&#180;&#231;&#186;&#191;" d="M4.33333 8.66667V10.6667C4.33333 11.0349 4.63181 11.3333 5 11.3333C5.36819 11.3333 5.66667 11.0349 5.66667 10.6667V8.66667C5.66667 8.29848 5.36819 8 5 8C4.63181 8 4.33333 8.29848 4.33333 8.66667Z" fill="#C8C8C8"/>
                <path id="&#231;&#155;&#180;&#231;&#186;&#191;_2" d="M10.3333 7.33335V10.6667C10.3333 11.0349 10.6318 11.3334 11 11.3334C11.3682 11.3334 11.6667 11.0349 11.6667 10.6667V7.33335C11.6667 6.96516 11.3682 6.66669 11 6.66669C10.6318 6.66669 10.3333 6.96516 10.3333 7.33335Z" fill="#C8C8C8"/>
                <path id="&#231;&#155;&#180;&#231;&#186;&#191;_3" d="M7.33333 5.33335V10.6667C7.33333 11.0349 7.63181 11.3334 8 11.3334C8.36819 11.3334 8.66667 11.0349 8.66667 10.6667V5.33335C8.66667 4.96516 8.36819 4.66669 8 4.66669C7.63181 4.66669 7.33333 4.96516 7.33333 5.33335Z" fill="#C8C8C8"/>
                <circle id="&#230;&#164;&#173;&#229;&#156;&#134;&#229;&#189;&#162;" cx="11" cy="5.33335" r="0.666667" fill="#C8C8C8"/>
            </g>
        </svg>
    );
}

export default function DiscoverCard({ book }) {
    return (
        <Card>
            <StyledLink to={`/details/${book.id}`}>
                <InformationPanel>
                    <Title>{book.title}</Title>
                    <Author>{book.authors.split(',')[0]}</Author>
                    <ReadNow>
                        <GraphSVG />
                        <ReadNowCount><Bold>100+</Bold> Read Now</ReadNowCount>
                    </ReadNow>
                </InformationPanel>
                <Image><BookCover src={book.cover}/></Image>
            </StyledLink>
        </Card>
    );
};
