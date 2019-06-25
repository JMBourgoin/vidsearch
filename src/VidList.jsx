import React from 'react';
import VidListItem from './VidListItem';

class VidList extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
vids = () => {
    const list = this.props.vids.map((vid, idx) => {
        return (
            <li key={idx}><VidListItem video={vid} /></li>
        )
    });
    return list;
}


    render(){
        
        return (
            <div>
                <ul>
                    {this.vids()}
                </ul>
            </div>
        )
    }
}

export default VidList;