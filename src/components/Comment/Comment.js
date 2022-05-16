import { Avatar, Textarea } from "@nextui-org/react";
import React from "react";
import "./Comment.styles.scss";

const Comment = () => {
  return (
    <div className="comment">
      <Avatar text="Joe" size="md" className="comment-avatar" />
      <Textarea
        readOnly
        initialValue="Almost before we knew it, we had left the ground."
        css={{ flex: '1' }}
      />
    </div>
  );
};

export default Comment;
