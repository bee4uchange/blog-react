import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Image,
  Input,
  Modal,
  Text,
  Textarea,
  User,
} from "@nextui-org/react";
import "./Post.styles.scss";
import Comment from "../../components/Comment/Comment";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost, updatePost } from "../../actions/posts";
import moment from "moment";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { post } = useSelector((state) => state.posts);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const [visible, setVisible] = React.useState(false);
  const [postData, setPostData] = useState(post);
  const navigate = useNavigate();

  console.log(postData);

  const clear = () => {
    setPostData({ title: "", message: "", tags: [], selectedFile: "" });
  };

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      updatePost(postData?._id, { ...postData, name: user?.result?.name })
    );
    clear();
    setVisible(false);
  };

  useEffect(() => {
    dispatch(getPost(id));
    window.scrollTo(0, 0);
  }, [dispatch, id, postData]);

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
                  <Button onClick={handler}>Edit</Button>
                  <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                  >
                    <Modal.Header>
                      <Text id="modal-title" size={18}>
                        Edit Post
                      </Text>
                    </Modal.Header>
                    <form onSubmit={handleSubmit}>
                      <Modal.Body>
                        <Input
                          clearable
                          bordered
                          fullWidth
                          color="primary"
                          size="lg"
                          placeholder="Title"
                          value={postData?.title}
                          onChange={(e) =>
                            setPostData({ ...postData, title: e.target.value })
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
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          auto
                          css={{ width: "100%" }}
                          onClick={closeHandler}
                          type="submit"
                        >
                          Update
                        </Button>
                      </Modal.Footer>
                    </form>
                  </Modal>
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

            <Comment post={post} />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Post;
