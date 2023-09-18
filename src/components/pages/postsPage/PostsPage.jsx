import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./PostsPage.module.css";
import PostTitle from "../../postTitle/PostTitle";
import { Button, Form } from "antd";
import Modal from "antd/es/modal/Modal";
import Input from "antd/es/input/Input";
import SearchPostModal from "../../UI/searchPostModal/SearchPostModal";


const PostsPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [filtredPost, setFiltredPost] = useState('')

  const filterPostov = () => {
    const filtredArray = posts.filter(item=> item.body === filtredPost)
    console.log(filtredArray)
  }

  const addNewPost = async (values) => {
    const response = await axios.post(` http://localhost:3001/posts`, values);
    setIsModalOpen(false);
    onReset();
    handleCancel();
    getPosts();
  };

  const getPosts = async () => {
    const response = await axios.get(` http://localhost:3001/posts`);
    setPosts(response.data);
  };

  const getPhotos = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos`
    );
    setPhotos(response.data);
  };

  useEffect(() => {
    getPosts();
    getPhotos();
  }, []);

  return (
    <div>
      <Button onClick={showModal}>Добавить новый пост</Button>
      <input
        type='text'
        value={filtredPost}
        onChange={e=>{
          setFiltredPost(e.target.value)
        }}
      />
      <button onClick={filterPostov}>фильтровать</button>
      <SearchPostModal setState={setPosts} />
      <Modal
        title="Введите данные для добавления"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={addNewPost}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Заголовок поста"
            name="title"
            rules={[
              { required: true, message: "Напишите корректный заголовок" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Содержание поста"
            name="body"
            rules={[
              { required: true, message: "Необходимо указать содержание" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div className={classes.posts}>
        {posts.map((post) => (
          <PostTitle
            photos={photos}
            post={post}
            key={post.id + 1}
            getPosts={getPosts}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
