import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Button, Form } from "antd";
import Card from "antd/es/card/Card";
import Input from "antd/es/input/Input";
import Modal from "antd/es/modal/Modal";


const PostIdPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();

  const [post, setPost] = useState({});

  const params = useParams();

  const getPost = async () => {
    const response = await axios.get(
      `http://localhost:3001/posts/${params.id}`
    );
    setPost(response.data);
  };

  const onReset = () => {
    form.resetFields();
  };

  const redactPost = async (values) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/posts/${params.id}`,
        values
      );
      handleCancel();
      getPost();
      onReset();
    } catch {}
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
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
          onFinish={redactPost}
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
      <Card>
        <div>
          <h4>Заголовок:</h4>
          {post.title}
        </div>
        <div>
          <h4>Содержание:</h4>
          {post.body}
        </div>
        <Button onClick={showModal}>Редактировать пост</Button>
      </Card>
    </div>
  );
};

export default PostIdPage;
