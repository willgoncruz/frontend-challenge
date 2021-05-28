import { makeAutoObservable } from 'mobx';
import { getVolumeByID } from '../api/googleapi';

export default class DiscoverStore {
    books = [];
    reading = {};
    failed = false;
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    reset() {
        this.books = [];
        this.reading = {};
    }

    getBookByID(id) {
        getVolumeByID(id).then(this.success, this.fail).then(() => this.loading = false)
    }

    readingBookByID(id) {
        getVolumeByID(id).then(this.successReading, this.fail).then(() => this.loading = false)
    }

    success = ({ data: book }) => {
        const newBook = {
            id: book.id,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            authors: (book.volumeInfo.authors || []).join(', '),
            cover: (book.volumeInfo.imageLinks || {}).thumbnail || '',
        };

        this.books.push(newBook);
    }

    successReading = ({ data: book }) => {
        this.reading = {
            id: book.id,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            authors: (book.volumeInfo.authors || []).join(', '),
            cover: (book.volumeInfo.imageLinks || {}).thumbnail || '',
        };
    }

    fail = (error) => {
        this.failed = true;
    }
}