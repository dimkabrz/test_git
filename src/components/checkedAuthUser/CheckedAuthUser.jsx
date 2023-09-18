import React from "react";
import { useSelector } from "react-redux";
import RedirectToLoginPage from "../pages/redirectPage/redirectToLoginPage";

const CheckedAuthUser = ({ component }) => {
  const isAuth = useSelector((state) => state.authorithation.isAuth);

  if (isAuth) {
    return component;
  }
  return <RedirectToLoginPage />;
};

export default CheckedAuthUser;
