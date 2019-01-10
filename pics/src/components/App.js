import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 9931ad5e6497d25993fab88250d8fc82ad2dfbf0bebf8d04cb83a8d0db16cb3c'
            }
        }).then((response) => {
            console.log(response.data.results);
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>  
        );
    }
}

export default App;
