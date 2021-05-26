import { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import Wallpaper from '../../components/Wallpaper';
import BackButton from '../../components/BackButton';

import { useHistory } from "react-router-dom";
import { DetailsContext } from '../../context';

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
    height: fit-content;
    margin-top: 10px;
    margin-bottom: 10px;


    font-family: SF Pro Text;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;

    color: rgba(49, 49, 49, 0.6);
`
export default observer((props) => {
    const { id } = props.match.params;
    const store = useContext(DetailsContext);
    const history = useHistory();

    useEffect(() => store.getBookByID(id));

    const { book } = store;
    return (
        <div>
            <BackButton onClick={history.goBack} />
            <Wallpaper bookCoverImageSrc={book.cover} />
            <InformationPanel>
                <Title>{book.title}</Title>
                <Author>{book.authors}</Author>
                <Description dangerouslySetInnerHTML={{__html: book.description }} />
            </InformationPanel>
        </div>
    );
});