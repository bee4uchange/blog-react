import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPost, updatePost } from "../../../actions/posts";

const EditPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { post, isLoading } = useSelector((state) => state.posts);

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
      />
      <Input
        clearable
        bordered
        fullWidth
        color="primary"
        size="lg"
        placeholder="Cover URL"
        value={postData?.selectedFile}
        onChange={(e) =>
          setPostData({
            ...postData,
            selectedFile: e.target.value,
          })
        }
      />
      <Button auto css={{ width: "100%" }} type="submit">
        Update
      </Button>
    </form>
  );
};

export default EditPost;
