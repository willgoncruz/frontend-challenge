import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: 375px;
    left: 0px;
    bottom: 0px;
    padding: 10px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    background: #FFFFFF;
`;

const Icon = styled.img`
    height: 39px;
`;

export default function Footer() {
    return (
        <Container>
            <Icon src={`${process.env.PUBLIC_URL}/Home.png`} />
            <Icon src={`${process.env.PUBLIC_URL}/Libraries.png`} />
            <Icon src={`${process.env.PUBLIC_URL}/Profile.png`} />
        </Container>
    );
};