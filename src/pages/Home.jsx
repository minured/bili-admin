import React, { useEffect, useState } from "react";
import { message, Layout, Menu } from "antd";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import "../style/home.scss";
import User from "../components/User";
import Video from "../components/Video";
import Tracer from "../components/Tracer";

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Home = (props) => {
  const checkLogin = () => {
    const token = localStorage.getItem("token") || undefined;
    if (token) {
      console.log("已登陆");
    } else {
      console.log("未登录");
      message.info("请先登录！");
      props.history.push("/login");
    }
  };

  useEffect(() => {
    checkLogin();
  });

  return (
    <div className="home-page">
      <Layout>
        <Sider trigger={null} collapsible >
          <div className="logo">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#iconbilibili"></use>
            </svg>
            <span className="welcome">欢迎你，admin</span>
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
              <Link to="/user">用户管理</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/video">视频管理</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/tracer">登陆查询</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            hahaha1
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route exact path="/user" component={User} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/tracer" component={Tracer} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
