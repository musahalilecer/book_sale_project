import React from 'react'
import { useState } from 'react';

export const SearchBar = () => {
    const [query, setQuery] = useState("");

    const [itmes, setItems] = useState([
        'Apple',
        'Banana',
        'Cherry', 
        'Date', 
        'Elderberry', 
        'Fig', 
        'Grape',
    ]);

    const handleSearchBar = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery); // Arama sorgusunu yukarı ilet
      };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 0',
        },
        searchBox: {
            position: 'relative',
            width: '50%',
        },
        input: {
            width: '100%',
            padding: '10px 15px',
            borderRadius: '25px',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '16px',
            boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
        },
        inputFocus: {
            borderColor: '#007BFF',
            boxShadow: '0px 4px 8px rgba(0, 123, 255, 0.2)',
        },
    };
    const handleSearch = (e) => {
        setQuery(e.target.value);
    };
    return (
        <div style={styles.container}>
            <div style={styles.searchBox}>
                <input
                    type='text'
                    placeholder='Search...'
                    value={query}
                    onChange={handleSearch}
                    style={{
                        ...styles.input,
                        ...(query && styles.inputFocus),
                    }}
                />
            </div>
        </div>
    );
}

export default SearchBar;