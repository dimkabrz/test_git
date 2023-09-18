import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./LoginPage.module.css";
import { setAuth } from "../../Toolkit/ToolkitSlice";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onFinish = async (values) => {
    try {
      const response = await axios.get(` http://localhost:3001/users`);
      const realUser = response.data.find((user) => {
        return user.username === values.username;
      });
      if (realUser) {
        setLoginError("");
        if (realUser.password === values.password) {
          localStorage.setItem("token", values.username);
          dispatch(setAuth(true));
          navigate("/posts");
        } else {
          setPasswordError("Неверный пароль");
        }
      } else {
        setLoginError("Неверный логин");
      }
    } catch {}
  };

  return (
    <Form
      className={classes.loginpage_container}
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
      <h1>Войти</h1>
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
      <div>{loginError}</div>
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
      <div>{passwordError}</div>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
