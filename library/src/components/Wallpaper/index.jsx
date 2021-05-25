import { PureComponent } from 'react';
import styled from 'styled-components';

import BookCover from '../BookCover';

const Container = styled.div`
    display: inline-block;
    position: relative;
    
    width: 100%;
    height: 282px;
`

const BookCoverStyle = styled.div`
    position: absolute;
    width: 151px;
    height: 234px;
    left: 113px;
    top: 84px;
`

const CoverShadow = styled.div`
    position: absolute;
    width: 146px;
    height: 17px;
    left: 114px;
    top: 305px;

    background: #D8D8D8;
    filter: blur(27.1828px);
`

const Mask = styled.img`
    width: 100%;
    height: fit-content;
`

export default class Wallpaper extends PureComponent {
    render() {
        const { bookCoverImageSrc } = this.props;
        return (
            <Container>
                <Mask src={`${process.env.PUBLIC_URL}/wallpaper.png`} />

                <BookCoverStyle>
                    <BookCover src={bookCoverImageSrc} />
                </BookCoverStyle>
                <CoverShadow />
            </Container>
        )
    }
}