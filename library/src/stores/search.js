import { makeAutoObservable } from 'mobx';
import { searchVolumes } from '../api/googleapi';
import debounce from 'lodash/debounce';

export default class SearchStore {
    page = 1;
    term = '';
    books = [];
    home = true;
    loading = false;

    constructor() {
        makeAutoObservable(this);
        this.search = debounce(this.debouncedSearch, 300);
    }

    debouncedSearch(term) {
        this.page = 1;
        this.term = term;
        if (!term) {
            return
        }

        this.searchVolumes();
    }

    loadMore() {
        this.page += 1;
        this.searchVolumes();
    }

    searchVolumes() {
        this.loading = true;
        searchVolumes(this.term, this.page).then(this.searchSuccess, this.searchFail);
    }

    searchSuccess = ({ data }) => {
        const volumes = data.items || [];
        this.books = volumes.map(book => ({
            id: book.id,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            authors: (book.volumeInfo.authors || []).join(', '),
            cover: (book.volumeInfo.imageLinks || {}).thumbnail || '',
        }));
        this.loading = false;
    }

    searchFail = (error) => {
        this.loading = false;
    }
}