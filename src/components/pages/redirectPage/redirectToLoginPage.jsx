import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router";

const RedirectToLoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      Вам необходимо сначала залогиниться
      <Button onClick={() => navigate("/")}>Войти</Button>
    </div>
  );
};

export default RedirectToLoginPage;
