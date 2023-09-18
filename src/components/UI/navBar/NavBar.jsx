import React from "react";
import {Button, Switch} from "antd";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setAuth, setTheme} from "../../Toolkit/ToolkitSlice";
import classes from "./NavBar.module.css";
import '../../../styles/colors.css'
import {ToggleTheme} from "../../../ToggleTheme";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toolkitTheme = useSelector(state=> state.authorithation.theme)

  const localTheme = localStorage.getItem('theme')

  const updTheme = localTheme === 'dark' ? 'light' : 'dark'


  const changeTheme = () => {
    localStorage.setItem('theme', updTheme)
    dispatch(setTheme(updTheme))
    ToggleTheme(updTheme)
  }


  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(setAuth(false));
    navigate("/");
  };



  const redirect = () => {
    navigate("/posts");
  };
  return (
        <div className={classes.NavBar}>
          <div className={classes.NavBar_buttons}>
            <Switch defaultChecked={localTheme === 'light'} onChange={changeTheme}/>
            <span>Switch to {localTheme === 'light'?'dark' : 'light'} mode</span>
            <Button onClick={logOut}>Выйти</Button>
            <Button onClick={redirect}>На главную</Button>
          </div>
        </div>
  );
};

export default NavBar;
