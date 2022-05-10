import { Card, Container, Grid, Text } from "@nextui-org/react";
import { useMediaQuery } from "./helpers/useMediaQuery";
import Header from "./components/Header";
import "./App.scss";

function App() {
  const isMd = useMediaQuery(960);

  const MockItem = ({ text }) => {
    return (
      <Card color="primary" css={{ h: "$24" }}>
        <Text h6 size={15} color="white" css={{ mt: 0 }}>
          {text}
        </Text>
      </Card>
    );
  };

  return (
    <div className="App">
      <Header />

      <Container id="main-container">
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} md={6}>
            <MockItem text={isMd ? "1 of 1" : "1 of 2"} />
          </Grid>
          <Grid xs={6} md={6}>
            <MockItem text={isMd ? "1 of 2" : "2 of 2"} />
          </Grid>
          <Grid xs={6} md={3}>
            <MockItem text={isMd ? "2 of 2" : "1 of 3"} />
          </Grid>
          <Grid xs={6} md={3}>
            <MockItem text={isMd ? "1 of 2" : "2 of 3"} />
          </Grid>
          <Grid xs={6} md={3}>
            <MockItem text={isMd ? "2 of 2" : "3 of 3"} />
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
}

export default App;
