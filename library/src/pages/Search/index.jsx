import { observer } from 'mobx-react-lite';

const SearchPage = observer((props) => {
    props.store.search('harry');
    return (
        <div>

        </div>
    );
});

export default SearchPage;