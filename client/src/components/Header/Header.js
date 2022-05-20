import React, { useEffect, useState } from "react";
import {
  Container,
  Modal,
  Input,
  Text,
  Button,
  Textarea,
  Avatar,
  Popover,
} from "@nextui-org/react";
import "./Header.styles.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../actions/posts";
import { useNavigate } from "react-router-dom";
import * as actionType from "../../constants/actionTypes";
import decode from "jwt-decode";

const Header = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();

  const [postData, setPostData] = useState({
    title: "",
    message: "",
    coverURL: "",
  });

  const clear = () => {
    setPostData({ title: "", message: "", tags: [], selectedFile: "" });
  };

  const { isLoading } = useSelector((state) => state.posts);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("ok");
    dispatch(
      createPost(
        {
          ...postData,
          name: user?.result?.name,
          avatar: user?.result?.imageUrl,
        },
        navigate
      )
    );
    clear();
    setVisible(false);
  };

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate("/");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <nav id="navbar-container">
      <div className="navbar-wrapper">
        <Container
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="navbar-left">
            <Link to={"/posts"}>
              <span className="logo">Octopus</span>
            </Link>
          </div>
          <div className="navbar-center">
            <div className="navbar-navigation">
              <NavLink to={"/posts"}>
                <span>Home</span>
              </NavLink>
              <NavLink to={"/blog"}>
                <span>Blog</span>
              </NavLink>
              <NavLink to={"/about"}>
                <span>About</span>
              </NavLink>
            </div>
          </div>
          <div className="navbar-right">
            <Modal
              closeButton
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Modal.Header>
                <Text id="modal-title" size={18}>
                  Create Post
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
                    value={postData.title}
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
                    value={postData.message}
                    onChange={(e) =>
                      setPostData({ ...postData, message: e.target.value })
                    }
                  />
                  <Input
                    clearable
                    bordered
                    fullWidth
                    color="primary"
                    size="lg"
                    placeholder="Cover URL"
                    value={postData.coverURL}
                    onChange={(e) =>
                      setPostData({ ...postData, coverURL: e.target.value })
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
                    Post
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>

            {user?.result ? (
              <>
                <Button
                  bordered
                  color="primary"
                  auto
                  rounded
                  id="button-signup"
                  onClick={handler}
                >
                  Create
                </Button>
                <Popover>
                  <Popover.Trigger>
                    <div className="user-info">
                      <Avatar
                        src={user?.result.imageUrl}
                        size="md"
                        css={{ cursor: "pointer" }}
                      />
                    </div>
                  </Popover.Trigger>
                  <Popover.Content>
                    <div style={{ padding: "0 1.5rem" }}>
                      <Text h5 css={{ paddingTop: "1rem" }}>
                        {user?.result.name}
                      </Text>
                      <Text
                        h5
                        css={{ paddingBottom: "1rem", cursor: "pointer" }}
                        onClick={logout}
                      >
                        Logout
                        <i
                          class="fa fa-sign-out"
                          aria-hidden="true"
                          style={{ paddingLeft: "0.5rem" }}
                        ></i>
                      </Text>
                    </div>
                  </Popover.Content>
                </Popover>
              </>
            ) : (
              <Link to={"/signin"}>
                <Button color="primary" auto rounded>
                  Sign in
                </Button>
              </Link>
            )}
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Header;
