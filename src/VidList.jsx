import React from 'react';
import VidListItem from './VidListItem';

const VidList = props => {
    
    const vids = () => {
    const filteredList = props.vids.filter(vid => {
        return vid.id.kind === 'youtube#video';
    });

    const list = filteredList.map((vid, idx) => {
        return (
            <li key={idx}><VidListItem onVideoSelect={props.onVideoSelect} video={vid} /></li>
        )
    });
    return list;
}

        return (
            <div>
                <ul className="vidsList">
                    {vids()}
                </ul>
            </div>
        )
}

export default VidList;