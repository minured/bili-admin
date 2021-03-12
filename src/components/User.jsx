import React, { useEffect, useState } from "react";
import { usersApi, searchUsersApi } from "../http";
import "../style/users.scss";
import { Radio, Input, Button, message } from "antd";
import UserItem from "../components/UserItem";

const User = () => {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [optionValue, setOptionValue] = useState("username");

  // 查询全部
  const getUsers = async () => {
    const res = await usersApi();
    if (res.data.status === 200) {
      setUsers(res.data.userlist);
      console.log(res.data.userlist);
    }
  };

  const searchUsers = async () => {
    if (input.trim() === "") {
      message.info("内容不能为空");
      return;
    }
    const searchData = {
      username: undefined,
      nickname: undefined,
    };
    if (optionValue === "nickname") {
      searchData.nickname = input;
    } else {
      searchData.username = input;
    }

    const res = await searchUsersApi(searchData);
    console.log(res.data);
    setUsers(res.data.result);
  };
  const options = [
    { label: "用户名", value: "username" },
    { label: "昵称", value: "nickname" },
  ];
  //option change
  const onChange = (e) => {
    setOptionValue(e.target.value);
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="user-page">
      <div className="head">
        <div className="options">
          <p>选择查询方式：</p>
          <Radio.Group
            options={options}
            value={optionValue}
            onChange={onChange}
            optionType="button"
          />
        </div>

        <Input onChange={onInputChange} />
        <Button onClick={searchUsers}>查询</Button>
      </div>
      <div className="title">查询结果：</div>

      <div className="query-result">
        {users.length > 0 ? <UserItem users={users} /> : "none"}
      </div>
    </div>
  );
};

export default User;
