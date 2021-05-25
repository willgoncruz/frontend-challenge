import { Component } from 'react';
import styled from 'styled-components';

import Wallpaper from '../../components/Wallpaper';

const InformationPanel = styled.div`
    margin: 0 20px;
    display: inline-block;
    position: relative;
    margin-top: 67px;
`

const Title = styled.div`
    width: 100%;
    height: 58px;

    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;

    color: #36383A;
`

const Author = styled.div`
    width: 100%;
    height: 19px;
    margin-top: 8px;

    font-family: SF Pro Display;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.670588px;

    color: #FF6978;
`

const Description = styled.div`
    width: 100%;
    height: 275px;
    margin-top: 10px;

    font-family: SF Pro Text;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;

    color: rgba(49, 49, 49, 0.6);
`

const imageURL = 'https://books.google.com/books/content/images/frontcover/buc0AAAAMAAJ?fife=w200-h300'

export default class Details extends Component {
    render() {
        return (
            <div>
                <Wallpaper bookCoverImageSrc={imageURL} />
                <InformationPanel>
                    <Title> Hooked: How to Build Habid-Forming Products </Title>
                    <Author>Nir Eyal</Author>
                    <Description>
                        How do successful companies create products people can't put down?
                        Why do some products capture widespread attention while others flop?
                        Why do some products capture widespread attention while others flop?
                        Why do some products capture widespread attention while others flop?
                    </Description>
                </InformationPanel>
            </div>
        );
    }
}