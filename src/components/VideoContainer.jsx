import React from 'react'
import VideoCard from './VideoCard'
import useFetchVideos from '../hooks/useFetchVideos';


const VideoContainer = () => {
    const videos = useFetchVideos();
    return (
        <div className='flex flex-row flex-wrap justify-center border-border-red-900'>
            {
                videos.map(video => <VideoCard info={video} key={video.id} />)
            }
        </div>
    )
}

export default VideoContainer