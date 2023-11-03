import React, {useState} from "react";

export function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('')

    const handleInputChange = (e : any) => {
        const newQuery = e.target.value
        setQuery(newQuery)
        onSearch(newQuery)
    };


    return (
       <>
         <div className="bg-base-300">
             <input
                 type="text"
                 placeholder="Search"
                 value={query}
                 onChange={handleInputChange}
             />
         </div>
       </>
    )
}

export default SearchBar

function onSearch(newQuery: any) {
    throw new Error("Function not implemented.");
}
