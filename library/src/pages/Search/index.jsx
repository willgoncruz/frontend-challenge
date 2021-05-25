import { Component } from 'react';
import { Observer } from 'mobx-react-lite';

import BookList from '../../components/BookList';
import SearchBar from '../../components/SearchBar';

export default class SearchPage extends Component {
    render() {
        return (
            <Observer>
                {() =>
                    <div>
                        <SearchBar store={this.context} />
                        <BookList books={this.context.books} />
                    </div>
                }
            </Observer>
        );
    }
}