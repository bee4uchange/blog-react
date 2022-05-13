import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import "./CardContent.styles.scss";
import { Link } from "react-router-dom";

export const CardContent = () => (
  <Card cover css={{ w: "100%", p: 0 }} id="card-container">
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Your day your way
        </Text>
        <Text h3 color="white">
          Your checklist for better sleep
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c522e2111877387.6009e3e81f5e8.jpg"
        height={400}
        width="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      blur
      css={{
        position: "absolute",
        bgBlur: "#0f1114",
        borderTop: "$borderWeights$light solid $gray700",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="/images/breathing-app-icon.jpeg"
                css={{ background: "black" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>
                Punzii
              </Text>
              <Text color="#d1d1d1" size={12}>
                2m ago
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Link to={"/blog/post/1"}>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Read
                </Text>
              </Button>
            </Row>
          </Link>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
