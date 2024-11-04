import React, { useState } from 'react'
import './SearchBar.css'
function SearchBar() {
    const handleSearch = (e) => {
        e.preventDefault();
    }
    const [searchQuery, setSearchQuery] = useState('');
    const setSearchKey
    return (
        <>
        :::{searchQuery}
        <div >
        <form className='search-bar' onSubmit={handleSearch}>
            <input  className='' type='text' value={searchQuery}  onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button className='search-bar-button' type="submit">Search</button>
        </form>
        </div>
        
        </>
    )
}

export default SearchBar
