import React from 'react';
import SearchBar from './SearchBar';
import VidList from './VidList';
import youtube from './api/youtube';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vids: []
        };
    }

    handleSubmit = (term) => {

        youtube.get('/search', {
            params: {
                q: term,
            }
        }).then(obj => { this.setState({ vids: obj.data.items})});
    };

    render(){
        return (
            <div>
                <SearchBar handleSubmit={this.handleSubmit}/>
                <VidList vids={this.state.vids}/>
            </div>
        )
    }
}

export default App;