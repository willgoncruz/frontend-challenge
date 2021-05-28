import styled from 'styled-components';

import BookCover from '../BookCover';

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

const ReadNowCount = styled.span`
    font-weight: bold;
`;

const Image = styled.div`
    position: absolute;

    width: 72px;
    height: 111px;

    top: 15px;
    left: 180px;
`;

export default function DiscoverCard({ book }) {
    return (
        <Card>
            <InformationPanel>
                <Title>{book.title}</Title>
                <Author>{book.authors.split(',')[0]}</Author>
                <ReadNow>
                    <ReadNowCount>100+</ReadNowCount> Read Now
                </ReadNow>
            </InformationPanel>
            <Image>
                <BookCover src={book.cover}/>
            </Image>
        </Card>
    );
};
