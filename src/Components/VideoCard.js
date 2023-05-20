import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg hover:bg-gray-400 ">
      <img
        className="rounded-lg"
        alt="video image"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
