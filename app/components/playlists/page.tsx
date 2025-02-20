import React from 'react'
import Image from "next/image";

type ApiResponse = {
  kind: string;
  etag: string;
  items?: {
    snippet: {
      title: string;
      description: string;
      thumbnails?: {
        medium?: { url: string };
      };
      resourceId: {
        videoId: string; 
      };
    };
  }[];
};

type Video = {
  title: string;
  description: string;
  thumbnail: string; 
  videoId: string; 
};

const page = async() => {
  let videos: Video[] = []; 

    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const api = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLFa0bDwXvBlDh-BZ34mkWSp8OnIS2X9Uk&key=${apiKey}`
    const response = await fetch(api); 
    const data: ApiResponse = await response.json();

    if (data.items && Array.isArray(data.items)) {
      
      videos = data.items.map((item) => ({
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails?.medium?.url || "fallback-thumbnail.jpg",
        videoId: item.snippet.resourceId.videoId,
      }));


  return (
    <div>
  <h1 className="text-center text-3xl p-4 font-bold">Here is your YouTube Playlist!</h1>
  <div className="space-y-4">
    {videos.map((video, index) => (
      <div
        key={index}
        className="flex items-center p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <a
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 w-full"
        >
          <div className="relative flex-shrink-0">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={192}
              height={108}
              className="w-48 h-28 rounded-lg object-cover"
            />
            <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
              10:00 
            </span>
          </div>

          
          <div className="flex-grow">
            <h2 className="text-lg font-semibold line-clamp-2">{video.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
            <div className="text-sm text-gray-500">
              <span>Channel Name</span> 
              <span> • </span>
              <span>100K views</span> 
              <span> • </span>
              <span>1 day ago</span>
            </div>
          </div>
        </a>
      </div>
    ))}
  </div>
</div>
  )
} }


export default page
