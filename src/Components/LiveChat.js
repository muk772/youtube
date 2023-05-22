import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../Utils/ChatSlice";
import { generateRandomName } from "../Utils/Helper";

const LiveCommentCard = ({ name, comment }) => {
  return (
    <div className="flex rounded-lg ">
      <img
        className="h-8 rounded-lg bg-gray-300"
        alt="live_chat_image"
        src="https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg?w=2000"
      />
      <h2 className="text-gray-900 ml-2 font-serif">{name}</h2>
      <div className="px-2"></div>
      <h2 className="">{comment}</h2>
    </div>
  );
};

const LiveChat = () => {
  useEffect(() => {
    const timer = setInterval(() => hanldeCommentsGenerator(), 1000);

    return () => clearInterval(timer);
  }, []);
  const dispatch = useDispatch();

  const hanldeCommentsGenerator = () => {
    dispatch(
      addChat({
        name: generateRandomName(),
        comment: "Hello how are you love",
      })
    );
  };
  const liveCommentary = useSelector((store) => store.chatSlice.chats);
  const liveComments = [...liveCommentary].reverse();

  return (
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      <div className="">
        {liveComments.map((curelem, index) => {
          return (
            <LiveCommentCard
              key={index}
              name={curelem.name}
              comment={curelem.comment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LiveChat;
