import { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import BookList from '../../components/BookList';
import SearchBar from '../../components/SearchBar';
import { SearchContext } from '../../context';

export default observer(() => {
    const store = useContext(SearchContext);

    return (
        <div>
            <SearchBar store={store} />
            <BookList books={store.books} />
        </div>
    );
});