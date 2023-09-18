import React from "react";
import { Route, Routes } from "react-router";
import Registration from "../pages/registration/Registration";
import WelcomePage from "../pages/welcomePage/WelcomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import CheckedAuthUser from "../checkedAuthUser/CheckedAuthUser";

import PostsPage from "../pages/postsPage/PostsPage";
import PostIdPage from "../pages/postIdPage/PostIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/posts/:id"
        element={<CheckedAuthUser component={<PostIdPage />} />}
      />
      <Route
        path="/posts"
        element={<CheckedAuthUser component={<PostsPage />} />}
      />
    </Routes>
  );
};

export default AppRouter;
