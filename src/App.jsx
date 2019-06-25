import React from 'react';
import SearchBar from './SearchBar';
import VidList from './VidList';
import VidSelect from './VidSelect';
import youtube from './api/youtube';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vids: [],
            onVideoSelect: null
        };
    }
    onVideoSelect = (video) => {
        this.setState({
            onVideoSelect: video
        });
    }

    handleSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term,
            }
        }).then(obj => { this.setState({ vids: obj.data.items})});
    };

    render(){

        let show = '';
        if(this.state.onVideoSelect === null){
            show = 'not-visible';
        }
        return (
            <div>
                <SearchBar handleSubmit={this.handleSubmit}/>
                <div className="vid-components">
                    <div className="vid-list">
                        <VidList className="vidsList" onVideoSelect={this.onVideoSelect} vids={this.state.vids}/>
                    </div>
                    <div className="curtains">
                        <VidSelect show={show} vid={this.state.onVideoSelect} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;