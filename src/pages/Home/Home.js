import { Button, Container, Grid, Image, Input, Text } from "@nextui-org/react";
import { useMediaQuery } from "../../helpers/useMediaQuery";
import "./Home.styles.scss";
import { CardContent } from "../../components/CardContent/CardContent";

function Home() {
  const isMd = useMediaQuery(960);

  return (
    <div className="App">
      <Container id="main-container">
        <Image
          src="https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/04/google-io-2022-cover.jpeg?w=2000&quality=82&strip=all&ssl=1"
          alt="Default Image"
          objectFit="cover"
        />

        <div className="search-container">
          <Input type="search" placeholder='Explore the world'/>
          <Button color="gradient" auto>
            Search
          </Button>
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
          <Grid xs={12} sm={6} md={4}>
            <CardContent />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <CardContent />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <CardContent />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <CardContent />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <CardContent />
          </Grid>
          <Grid xs={12} sm={6} md={4}>
            <CardContent />
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
}

export default Home;
