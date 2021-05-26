import styled from 'styled-components';

const Button = styled.img`
    position: absolute;
    width: 14px;
    height: 14px;
    left: 32px;
    top: 55px;
    z-index: 1;
`

export default function BackButton({ onClick }) {
    return (
        <Button src={`${process.env.PUBLIC_URL}/Back.png`} onClick={onClick} />
    );
};