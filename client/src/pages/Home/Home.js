import {
  Button,
  Container,
  Grid,
  Input,
  Pagination,
  Text,
} from "@nextui-org/react";
import "./Home.styles.scss";
import CardContent from "../../components/CardContent/CardContent";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const query = useQuery();
  const page = query.get("page") || 1;
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts)

  return (
    <div className="App">
      <Container id="main-container">
        {posts.length > 0 && <CardContent data={posts[0]} />}

        <Text
          size={40}
          css={{
            paddingLeft: "calc(2 * 0.375rem)",
            paddingTop: "2rem",
          }}
          weight="bold"
        >
          For you
        </Text>

        <Grid.Container gap={2} justify="center">
          {posts.slice(1).map((data, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <CardContent data={data} index={index} />
            </Grid>
          ))}
        </Grid.Container>

        <div className="pagination">
          <Pagination rounded total={5} initialPage={page} />
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
