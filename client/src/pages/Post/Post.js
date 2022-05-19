import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Image, Text, User } from "@nextui-org/react";
import "./Post.styles.scss";
import Comment from "../../components/Comment/Comment";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost, deletePost } from "../../actions/posts";
import moment from "moment";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { post, isLoading } = useSelector((state) => state.posts);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleDelete = async (e) => {
    // e.preventDefault();
    dispatch(deletePost(id));
    navigate("/posts");
  };

  const navigateToEdit = () => {
    navigate(`/posts/${id}/edit`);
  };

  useEffect(() => {
    dispatch(getPost(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  return (
    <>
      <Container>
        <div className="post-container">
          {!isLoading && (
            <div className="post-wrapper">
              <div className="post-header">
                <div className="post-title">
                  <Text h1 weight="bold">
                    {post?.title}
                  </Text>
                </div>
                <div className="post-info">
                  <div className="post-author">
                    <User text={post?.name} name={post?.name} size="sm" />
                  </div>

                  <div className="post-time">
                    <span>{moment(post?.createdAt).fromNow()}</span>
                  </div>
                </div>

                {user?.result.googleId === post?.creator && (
                  <Button.Group
                    rounded
                    css={{
                      paddingTop: "1.5rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button onClick={navigateToEdit}>Edit</Button>
                    <Button color="error" onClick={handleDelete}>Delete</Button>
                  </Button.Group>
                )}
              </div>

              <Image
                src={post?.selectedFile}
                alt="Default Image"
                objectFit="cover"
                width={1200}
                height={500}
              />

              <div className="post-body">
                <Text
                  css={{
                    width: "1000px",
                    textAlign: "justify",
                    padding: "2rem 0",
                  }}
                >
                  {post?.message}
                </Text>
              </div>

              {post && <Comment post={post} />}
            </div>
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Post;
