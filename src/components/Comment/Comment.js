import { Avatar, Textarea, Text } from "@nextui-org/react";
import React from "react";
import "./Comment.styles.scss";

const Comment = () => {
  return (
    <div className="comment">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <Avatar text="Joe" size="sm" className="comment-avatar" />
        <Text h5 css={{ margin: '0' }}>Joe Harry</Text>
      </div>
      <Textarea
        readOnly
        initialValue="Almost before we knew it, we had left the ground."
        css={{ flex: "1" }}
      />
    </div>
  );
};

export default Comment;
