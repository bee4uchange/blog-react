import { Card, Col, Row, Button, Text, Avatar } from "@nextui-org/react";
import "./CardContent.styles.scss";
import { Link } from "react-router-dom";
import React from "react";

const CardContent = ({data, index}) => {
  return (
    <div className="example-2 card">
      <div
        className="wrapper"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(${data?.url}) center / cover no-repeat`,
        }}
      >
        <div className="header">
          <div className="date">
            <span className="day">12</span>
            <span className="month">Aug</span>
            <span className="year">2016</span>
          </div>
          <ul className="menu-content">
            <li>
              <a href="#" className="fa fa-heart-o">
                <span>18</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="data">
          <div className="content">
            <span className="author">
              <Avatar text="Jane" size="sm" className="avatar" />
              Jane Doe
            </span>
            <Link to={"/blog/post/1"}>
              <h1 className="title">{data?.title}</h1>
            </Link>
            <p className="text">
              The antsy bingers of Netflix will eagerly anticipate the digital
              release of the Survive soundtrack, out today.
            </p>
            <Link to={"/blog/post/1"}>
              <span className="button">Read more</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
