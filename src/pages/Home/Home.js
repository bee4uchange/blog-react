import {
  Button,
  Container,
  Grid,
  Image,
  Input,
  Pagination,
  Text,
} from "@nextui-org/react";
import { useMediaQuery } from "../../helpers/useMediaQuery";
import "./Home.styles.scss";
import CardContent from "../../components/CardContent/CardContent";

function Home() {
  const isMd = useMediaQuery(960);

  const imageList = [
    {
      title: "Google previews the Pixel Watch, coming this fall with Pixel 7",
      url: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/04/google-io-2022-cover.jpeg?w=2000&quality=82&strip=all&ssl=1",
    },
    {
      title:
        "Chromecast with Google TV, almost two years later – Poorly aging hardware betrays the good OS",
      url: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/05/google_pixel_family_01-1.jpg?w=2000&quality=82&strip=all&ssl=1",
    },
    {
      title:
        "Google confirms Pixel bug that randomly changes your ringtone and alarm sounds [Update]",
      url: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2021/11/Pixel-6-fingerprint-scanner.jpg?w=2000&quality=82&strip=all&ssl=1",
    },
    {
      title: "10 Google Pixel features that you’re not using enough [Video]",
      url: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/05/health-connect-play-store.jpg?w=2000&quality=82&strip=all&ssl=1",
    },
    {
      title:
        "Android 13 will block sideloaded apps from using accessibility features",
      url: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/05/Pixel-7-and-Pixel-7-Pro.jpg?w=2000&quality=82&strip=all&ssl=1",
    },
    {
      title: "Google wants your initial Android 13 feedback with Beta 1 survey",
      url: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/05/google-tablet-cover-high.png?w=2000&quality=82&strip=all&ssl=1",
    },
    {
      title:
        "Pixel 6 long-term review: All the ‘Pros’ with very few cons [Video]",
      url: "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/05/pixel-watch-io-2.jpg?w=2000&quality=82&strip=all&ssl=1",
    },
  ];

  return (
    <div className="App">
      <Container id="main-container">
        <CardContent data={imageList[0]}/>

        <div className="search-container">
          <div className="search-wrapper">
            <Input type="search" placeholder="Explore the world" rounded />
            <Button color="primary" auto rounded>
              Search
            </Button>
          </div>
        </div>

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
          {imageList.slice(1).map((data, index) => (
            <Grid xs={12} sm={6} md={4} key={index}>
              <CardContent data={data} index={index}/>
            </Grid>
          ))}
        </Grid.Container>

        <div className="pagination">
          <Pagination rounded total={5} initialPage={1} />
        </div>
      </Container>
    </div>
  );
}

export default Home;
