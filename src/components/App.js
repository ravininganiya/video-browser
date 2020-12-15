import React, { useState } from 'react';
import Searchbar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const App=()=>{
    const[searchVideo,setSearchVideo]=useState("");
    const[selectedVideo,setSelectedVideo]= useState(null);
    const onTermSubmit = async term =>{
        const response = await youtube.get('/search', {
            params:{
                q:term
            }
        });
        // console.log(response.data.items)
        setSearchVideo(response.data.items);
        setSelectedVideo(response.data.item)
    };
    const onVideoSelect = video =>{
        setSelectedVideo(video);
    };

    return(
        <div className="ui container">
            <Searchbar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="four wide column">
                        <VideoList onVideoSelect={onVideoSelect} videos={searchVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
