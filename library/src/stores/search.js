import { makeAutoObservable } from 'mobx';
import { searchVolumes } from '../api/googleapi';

export default class SearchStore {
    books = [];
    failed = false;
    
    constructor() {
        makeAutoObservable(this);
    }

    search(term) {
        this.failed = false;
        searchVolumes(term).then(this.searchSuccess, this.searchFail);
    }

    searchSuccess = ({ data }) => {
        const volumes = data.items;
        this.books = volumes.map(book => ({
            id: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors.join(', '),
            description: book.volumeInfo.description,
            cover: (book.volumeInfo.imageLinks || {}).thumbnail || '',
        }));
    }

    searchFail = (error) => {
        this.failed = true;
    }
}