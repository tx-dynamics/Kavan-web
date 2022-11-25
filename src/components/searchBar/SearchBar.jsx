import React from 'react'
import { search } from '../../assets'
import './searchBar.css'
const SearchBar = () => {
    return (
        <div className='kwn_search_bar_container'>
            <div>
                <input placeholder='Search' />
                <img src={search} />
            </div>
        </div>
    )
}

export default SearchBar
