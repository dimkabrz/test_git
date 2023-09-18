import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router";
import classes from "./WelcomePage.module.css";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.welcomePage_mainContainer}>
      <h1>welcome to project</h1>
        <div className={classes.welcomePage_btns}>
            <Button onClick={() => navigate("/registration")} className={classes.registrationBtn}>Регистрация</Button>
            <Button onClick={() => navigate("/login")}>Войти</Button>
        </div>

    </div>
  );
};

export default WelcomePage;
