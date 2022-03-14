import React, { Component } from "react";
import withData from "../hoc/withData";
import "./posts.styles.scss";

const Posts = ({ data }) => (
  <>
    <div className="posts-container">
      <h2>Posts</h2>
      {data.slice(0, 11).map((post) => (
        <div key={post.id} className="post-item">
          <h2 style={{ color: "#ff8500" }}>Post Number {post.id}</h2>

          <h4 className="post-title">
            {post.title.length < 20 ? post.title : post.title.slice(0, 30)}
          </h4>
          <p className="post-body">
            {post.body.length < 80 ? post.body : post.body.slice(0, 70)}
          </p>
        </div>
      ))}
    </div>
  </>
);

export default withData(Posts, "https://jsonplaceholder.typicode.com/posts");
