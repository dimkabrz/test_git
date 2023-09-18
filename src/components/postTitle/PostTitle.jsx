import React from "react";
import classes from "./PostTitle.module.css";
import { Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";

const PostTitle = ({ photos, post, getPosts }) => {
  const navigate = useNavigate();
  const photo = photos.find((photo) => photo.albumId === post.id);
  if (!photo) {
    return null;
  }

  const deletePost = async () => {
    const response = await axios.delete(
      ` http://localhost:3001/posts/${post.id}`
    );
    getPosts();
  };

  // const redire

  return (
    <div className={classes.post_card}>
      <img alt="loading" src={photo.url} />
      <div>
          <div>Заголовок:{post.title}</div>
          <div>Содержание:{post.body}</div>
      </div>
      <div>
        <Button onClick={deletePost}>Удалить пост</Button>
        <Button onClick={() => navigate(`/posts/${post.id}`)}>
          Редактировать пост
        </Button>
      </div>
    </div>
  );
};

export default PostTitle;
