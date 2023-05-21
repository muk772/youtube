import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/AppSlice";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="px-5">
      <div className="flex flex-row">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + params.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className="w-96 border border-gray-600 ml-16 rounded-lg shadow-lg">
          <LiveChat />
        </div>
      </div>
      <div className="">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
