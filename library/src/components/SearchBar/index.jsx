import { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
`

const Input = styled.input`
    display: inline-block;

    width: fill-available;
    height: 48px;
    margin: 0 20px;
    margin-top: 50px;
    padding: 0 20px;

    background: #FDFCFC;
    box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
    border-radius: 10px;

    font-family: SF Pro Text;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
`

export default class SearchBar extends PureComponent {
    doSearch = (e) => {
        this.props.store.search(e.target.value)
    }

    render() {
        return (
            <Container>
                <Input type='text' placeholder='Search book' onChange={this.doSearch}/>
            </Container>
        );
    }
}