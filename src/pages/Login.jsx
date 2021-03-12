import React, { useState } from "react";
import "../style/login.scss";
import { Button, Layout, Input, Form, message } from "antd";
import axios from "axios";

const { Header, Content } = Layout;
const Login = (props) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  // 登录
  const onFinish = async (values) => {
    console.log("Success:", values);
    const res = await axios.post(
      "http://159.75.122.22:3001/admin/login",
      values
    );
    console.log(res.data);
    if (res.data.status === 200) {
      message.success("登陆成功");
      localStorage.setItem("token", res.data.token);
      props.history.push("/home");
    } else {
      message.info(res.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-page">
      <Layout>
        <Header>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#iconbilibili"></use>
          </svg>
          <span className="title">哔哩哔哩后台管理</span>
        </Header>
        <Content>
          <div className="input-wrapper">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Login;
