import React, { useContext, useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import Home from '../Home';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import BookList from '../../components/BookList';
import SearchBar from '../../components/SearchBar';
import { SearchContext } from '../../context';

const LoadingContainer = styled.div`
    display: flex;
    height: fit-content;
`;

export default observer(() => {
    const store = useContext(SearchContext);
    const loader = useRef(null);

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting && store.books.length > 0) {
            store.loadMore();
        }
    };

    useEffect(() => {
        const options = { root: null, rootMargin: "20px", threshold: 1.0 };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
           observer.observe(loader.current)
        }
    });

    return (
        <div>
            <SearchBar store={store} />

            { store.home && <Home /> }

            { !store.home &&
                <React.Fragment>
                    <BookList books={store.books} />
                    <LoadingContainer ref={loader}>
                        <Loading isVisible={store.loading} />
                    </LoadingContainer>
                    <Footer />
                </React.Fragment>
            }
        </div>
    );
});