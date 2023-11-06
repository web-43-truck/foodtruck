import React, {useState} from "react";
import {SearchableList} from '/SearchableList';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
         <div>
             <input
                 type="text"
                 placeholder="Search..."
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
             />
             <button onClick={handleSearch}>Search</button>
         </div>
    );
}

export default SearchBar

function onSearch(newQuery: any) {
    throw new Error("Function not implemented.");
}
