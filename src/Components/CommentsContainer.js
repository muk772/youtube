import React from "react";

const commentsData = [
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Mukund",
        comment:
          "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Mukund",
            comment:
              "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "Mukund",
                comment:
                  "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Mukund",
    comment:
      "Introduction Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="bg-gray-200 my-2">
      <div className="flex">
        <img
          className="h-10"
          alt="comment profile"
          src="https://img.freepik.com/premium-vector/male-profile-flat-blue-simple-icon-with-long-shadowxa_159242-10092.jpg?w=2000"
        />
        <h2 className="font-bold px-2">{name}</h2>
      </div>
      <h2 className="px-5">{comment}</h2>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((curelem) => {
        return (
          <>
            <Comment data={curelem} />
            <div className="pl-5 border border-l-black ml-5">
              <CommentsList comments={curelem.replies} />
            </div>
          </>
        );
      })}
    </>
  );
  //   return <Comment data={comment} />;
};

const CommentsContainer = () => {
  return (
    <div>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
