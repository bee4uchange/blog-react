import { Button, Input, Textarea, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, updatePost } from "../../../actions/posts";

const EditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { post } = useSelector((state) => state.posts);

  const [postData, setPostData] = useState(post);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updatePost(id, { ...postData, name: user?.result?.name }, navigate)
    );
  };

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  return (
    <div className="edit-container" style={{ paddingTop: "8rem" }}>
      <div className="edit-wrapper" style={{ width: "30%", margin: "0 auto" }}>
        <Text h2 css={{ textAlign: 'center' }}>Edit Post</Text>
        <form onSubmit={handleSubmit}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Title"
            value={postData?.title}
            onChange={(e) =>
              setPostData({
                ...postData,
                title: e.target.value,
              })
            }
            css={{ marginBottom: "1rem" }}
          />
          <Textarea
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="What do you think?"
            value={postData?.message}
            onChange={(e) =>
              setPostData({
                ...postData,
                message: e.target.value,
              })
            }
            css={{ marginBottom: "1rem" }}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Cover URL"
            value={postData?.coverURL}
            onChange={(e) =>
              setPostData({
                ...postData,
                coverURL: e.target.value,
              })
            }
            css={{ marginBottom: "1rem" }}
          />
          <Button auto css={{ width: "100%" }} type="submit">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
