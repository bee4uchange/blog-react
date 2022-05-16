import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import "./CardContent.styles.scss";
import { Link } from "react-router-dom";

export const CardContent = () => (
  <div class="example-2 card">
    <div
      class="wrapper"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/05/google_pixel_family_01-1.jpg?w=2000&quality=82&strip=all&ssl=1) center / cover no-repeat",
      }}
    >
      <div class="header">
        <div class="date">
          <span class="day">12</span>
          <span class="month">Aug</span>
          <span class="year">2016</span>
        </div>
        <ul class="menu-content">
          <li>
            <a href="#" class="fa fa-heart-o">
              <span>18</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="data">
        <div class="content">
          <span class="author">Jane Doe</span>
          <Link to={"/blog/post/1"}>
            <h1 class="title">
              Multiple models of Google Pixel 6a pass through FCC, pointing to
              wider international release
            </h1>
          </Link>
          <p class="text">
            The antsy bingers of Netflix will eagerly anticipate the digital
            release of the Survive soundtrack, out today.
          </p>
          <Link to={"/blog/post/1"}>
            <span class="button">Read more</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
