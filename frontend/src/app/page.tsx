import React, {useState} from 'react';
import {NavBar} from "@/components/NavBar";
import 'mapbox-gl/dist/mapbox-gl.css'
import SearchBar from "@/components/SearchBar";
import SearchableList from "@/components/SearchableList";
import items from "@maplibre/maplibre-gl-style-spec/docs/src/components/items/items";

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <h1>Searchable List</h1>
            <SearchBar onSearch={setSearchQuery}/>
            <SearchableList items={items} searchQuery={searchQuery}/>
        </div>
    );
}

export default function Home() {
    const links = [
        {linkName: 'Sign-in', href: '/'},
        {linkName: 'Sign-up', href: '/'},
        {linkName: 'Favorites', href: '/'}
    ]

    return (
        <>
          <NavBar links={}/>
          <SearchBar onSearch={undefined}/>
          <SearchableList/>
        </>
    )
}



