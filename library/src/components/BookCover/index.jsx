import { PureComponent } from 'react';
import styled from 'styled-components';

const Image = styled.img`
    position: relative;
    display: inline-block;

    width: 100%;
    height: 100%; 
`

export default class BookCover extends PureComponent {
    render() {
        const { src } = this.props;
        return (
            <Image src={src} />
        );
    }
}