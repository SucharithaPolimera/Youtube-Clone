import React, { useEffect, useState } from 'react';
import "./Recommended.css";
import { API_KEY, valueConverter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {
    const[apiData, setApiData] = useState([]);
    const fetchApiData = async () => {
        const  relatedVideo_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_URL).then(response => response.json()).then(data => setApiData(data.items));
    }

    useEffect(()=>{
        fetchApiData();
    },[categoryId]);
    return (
        <div className='recommended'>
            {apiData.map((item, index)=>{
                return(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt=""/>
                        <div className='vid-info'>
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{valueConverter(item.statistics.viewCount)} Views</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Recommended