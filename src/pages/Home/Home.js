import { Container, Grid, Image, Text } from "@nextui-org/react";
import { useMediaQuery } from "../../helpers/useMediaQuery";
import "./Home.styles.scss";
import { CardContent } from "../../components/CardContent/CardContent";

function Home() {
  const isMd = useMediaQuery(960);

  return (
    <div className="App">
      <Container id="main-container">
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3b640b111877387.6009e4d80af41.jpg"
          alt="Default Image"
          objectFit="cover"
        />

        <Text
          h1
          size={50}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            paddingTop: '2rem'
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
