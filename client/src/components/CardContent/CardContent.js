import { Avatar } from "@nextui-org/react";
import "./CardContent.styles.scss";
import { Link } from "react-router-dom";
import React from "react";
import moment from "moment";

const CardContent = ({ data, index }) => {
  return (
    <div className="example-2 card">
      <div
        className="wrapper"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.90) 100%), url(${data?.coverURL}) center / cover no-repeat`,
        }}
      >
        <div className="header">
          <div className="date">{moment(data.createdAt).fromNow()}</div>
          <ul className="menu-content">
            <li>
              <div className="fa fa-heart-o">
              </div>
            </li>
          </ul>
        </div>
        <div className="data">
          <div className="content">
            <span className="author">
              <Avatar src={data?.avatar} size="sm" className="avatar" />
              {data?.name}
            </span>
            <Link to={`/posts/${data?._id}`}>
              <h1 className="title">{data?.title}</h1>
            </Link>
            <p className="text">{data?.message.split(".")[0]}.</p>
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
