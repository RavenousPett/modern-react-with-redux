import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 9931ad5e6497d25993fab88250d8fc82ad2dfbf0bebf8d04cb83a8d0db16cb3c'
            }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                
                <SearchBar onSubmit={this.onSearchSubmit} />

                Found: {this.state.images.length} images

            </div>  
        );
    }
}

export default App;
