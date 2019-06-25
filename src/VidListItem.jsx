import React from 'react';

const VidListItem = (props) => {
   const vid = props.video;
   const title = vid.snippet.title;
   const description = vid.snippet.description;
   const thumbnailURL = vid.snippet.thumbnails.medium.url;

    return (
        <div className="ui card">
            <div className="image">
             <img src={thumbnailURL} alt={title}/>
            </div>
            <div className="content">
                <div className="header">
                {`Title: ${title}`}
                </div>
                <div className="description">
                {`Description: ${description}`}
                </div>
            </div>
        </div>
    );
}

export default VidListItem;