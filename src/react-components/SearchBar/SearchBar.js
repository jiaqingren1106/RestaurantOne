import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form className='SearchBar'>
                    <input type="text" placeholder="Search for your restaurant"></input>
                </form>
            </div>
                
            
        );
    }
}

export default SearchBar;