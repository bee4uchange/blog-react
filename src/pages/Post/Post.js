import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Image,
  Text,
  User,
} from "@nextui-org/react";
import "./Post.styles.scss";
import { Textarea } from "@nextui-org/react";
import Comment from "../../components/Comment/Comment";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/posts";
import moment from "moment";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    dispatch(getPost(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  console.log(post);

  return (
    <>
      <Container>
        <div className="post-container">
          <div className="post-wrapper">
            <div className="post-header">
              <div className="post-title">
                <Text h1 weight="bold">
                  {post?.title}
                </Text>
              </div>
              <div className="post-info">
                <div className="post-author">
                  <User
                    src={user?.result.imageUrl}
                    name={user?.result.name}
                    size="sm"
                  />
                </div>

                <div className="post-time">
                  <span>{moment(post.createdAt).fromNow()}</span>
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
                  <Button>Edit</Button>
                  <Button color="error">Delete</Button>
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

            <div className="post-comment">
              <Comment />
              <Comment />
              <Comment />

              <div>
                <Avatar text="Joe" size="md" className="comment-avatar" />
                <Textarea
                  initialValue="Almost before we knew it, we had left the ground."
                  css={{ flex: "1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Post;
