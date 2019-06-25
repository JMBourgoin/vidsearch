import React from 'react';

const VidSelect = props => {
     let id = '';
     let title = '';
     let image = '';
     let description = '';
     let channel = '';

    if(props.vid !== null){
        id = props.vid.id.videoId;
        title = props.vid.snippet.title;
        description = props.vid.snippet.description;
        image = props.vid.snippet.thumbnails.medium.url;
        channel = props.vid.snippet.channelTitle;
    } 

 return (
        <div className='video-player'>
            <div className={props.show}>
                <iframe title={title} width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameBorder="0"></iframe>

                <div className="ui items">
                    <div className="item">
                        <div className="image">
                             <img src={image} alt={title}/>
                        </div>
                        <div className="content">
                             <a className="header" href='https://www.youtube.com'>{title}</a>
                             <div className="meta">
                                 <span></span>
                             </div>
                             <div className="description">
                                 <p>{description}</p>
                             </div>
                             <div className="extra">
                                 {channel}
                             </div>
                         </div>
                    </div>
                 </div> 
            </div>
        </div>
        )
}

export default VidSelect;

