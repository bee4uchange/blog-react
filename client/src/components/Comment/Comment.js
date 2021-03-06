import { Avatar, Textarea, Text, Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import "./Comment.styles.scss";

const Comment = ({ post }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const commentsRef = useRef();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );

    setComment("");
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="post-comment">
      <div className="comment-wrapper">
        <div
          style={{
            display: "flex",
            marginBottom: "5rem",
            alignItems: "center",
          }}
        >
          <Textarea
            placeholder="What do you think?"
            css={{ flex: "1", paddingRight: "0.5rem" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button auto onClick={handleComment}>
            Send
          </Button>
        </div>
        {comments?.map((data, i) => (
          <div className="comment">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <Avatar text={data.split(": ")[0]} size="sm" className="comment-avatar" />
              <Text h5 css={{ margin: "0" }}>
                {data.split(": ")[0]}
              </Text>
            </div>
            <Textarea
              readOnly
              initialValue={data.split(":")[1]}
              css={{ flex: "1" }}
            />
          </div>
        ))}
        <div ref={commentsRef} />
      </div>
    </div>
  );
};

export default Comment;
