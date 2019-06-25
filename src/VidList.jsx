import React from 'react';
import VidListItem from './VidListItem';

class VidList extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
vids = () => {
    const filteredList = this.props.vids.filter(vid => {
        return vid.id.kind === 'youtube#video';
    });

    const list = filteredList.map((vid, idx) => {
        return (
            <li key={idx}><VidListItem onVideoSelect={this.props.onVideoSelect} video={vid} /></li>
        )
    });
    return list;
}


    render(){
        
        return (
            <div>
                <ul className="vidsList">
                    {this.vids()}
                </ul>
            </div>
        )
    }
}

export default VidList;