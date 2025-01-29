import { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {

    const [searchTermText, setSearchTermText] = useState('');

    const handleSearchTermChange = ({ target }) => {
        setSearchTermText(target.value)
        props.updateSearchTerm(searchTermText)
    }

    return (
        <form 
        id='searchBar'
        onSubmit={()=>{}}>
            <input type="search" 
            value={searchTermText}
            placeholder="Start typing a team..."
            onChange={handleSearchTermChange} />
        </form>    
    )
}

export default SearchBar;