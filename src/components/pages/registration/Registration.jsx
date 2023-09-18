import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from "./Registration.module.css";
import { useDispatch } from "react-redux";
import { setAuth } from "../../Toolkit/ToolkitSlice";

const Registration = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onFinish = async (values) => {
    const response = await axios.post(` http://localhost:3001/users`, values);
    navigate("/posts");
    localStorage.setItem("token", values.username);
    dispatch(setAuth(true));
  };

  return (
    <Form
      className={classes.registration_container}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <h1>Регистрация</h1>
      <Form.Item
        label="Логин"
        name="username"
        rules={[
          {
            required: true,
            message: "Пожалуйста введите имя",
          },
        ]}
      >
        <Input autoComplete="current-login" />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Пожалуйста введите пароль",
          },
        ]}
      >
        <Input.Password autoComplete="current-password" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Registration;
