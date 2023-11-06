import React from 'react';

function SearchableList({ items, searchQuery }: any) {
    const filteredItems = items.filter ((item : any) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <ul>
            {filteredItems.map((item : any, index: React.Key | null | undefined) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
};

export default SearchableList