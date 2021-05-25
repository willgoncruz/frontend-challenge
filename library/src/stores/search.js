import { makeAutoObservable } from 'mobx';
import { searchVolumes } from '../api/googleapi';
import debounce from 'lodash/debounce';

export default class SearchStore {
    books = [];
    failed = false;

    constructor() {
        makeAutoObservable(this);
        this.search = debounce(this.debouncedSearch, 300);
    }

    debouncedSearch(term) {
        this.failed = false;
        if (!term) {
            return
        }

        searchVolumes(term).then(this.searchSuccess, this.searchFail);
    }

    searchSuccess = ({ data }) => {
        const volumes = data.items;
        this.books = volumes.map(book => ({
            id: book.id,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            authors: (book.volumeInfo.authors || []).join(', '),
            cover: (book.volumeInfo.imageLinks || {}).thumbnail || '',
        }));
    }

    searchFail = (error) => {
        this.failed = true;
    }
}