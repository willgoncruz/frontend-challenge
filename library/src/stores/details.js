import { makeAutoObservable } from 'mobx';
import { getVolumeByID } from '../api/googleapi';

export default class DetailsStore {
    book = {};
    failed = false;
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    getBookByID(id) {
        getVolumeByID(id).then(this.success, this.fail).then(() => this.loading = false)
    }

    success = ({ data: book }) => {
        this.book = {
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