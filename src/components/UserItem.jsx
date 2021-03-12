import React, { useEffect } from "react";
import { List, Avatar } from "antd";
import "../style/userItem.scss"

const UserItem = (props) => {

  return (
    <div className="user-item">
      <List
        itemLayout="horizontal"
        dataSource={props.users}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.userImg} />}
              title={item.nickname}
            />
            UID: {item.username}
            <div>个签: {item.userDesc}</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default UserItem;
