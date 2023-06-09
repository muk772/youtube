import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../Utils/Constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((curelem) => {
        return (
          <Link to={"/watch?v=" + curelem.id} key={curelem.id}>
            <VideoCard info={curelem} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
