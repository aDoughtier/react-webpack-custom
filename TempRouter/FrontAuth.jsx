import React from "react";
import { Route, Navigate } from "react-router-dom";
import RouterConfig from "./RouterConfig";

export default function FrontendAuth(props) {


  const pathname = this.props.location.pathname;
  const targetRouter = RouterConfig.find(function (item) {
    return item.path === pathname;
  });
  const isLogin = JSON.parse(sessionStorage.getItem("loginStatus"));

  if (pathname === "/") {
    return <Navigate to="login" />
  }

  if (!targetRouter) {
    return <Navigate to="404" />
  }

  if (isLogin) {
    if (pathname === "/login") {
      return <Navigate to="/home" />
    } else {
      return (
        <Route exact path={pathname} element={targetRouter.element} />
      );
    }
  } else {
    if (targetRouter.auth) {
      console.log("请先登录");
      return <Navigate exact to="/login" />
    } else {
      return (
        <Route exact path={pathname} element={targetRouter.element} />
      );
    }
  }
}