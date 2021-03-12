import React, { useEffect, useState } from "react";
import { userList } from "../http";

const User = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const res = await userList();
    if (res.data.status === 200) {
      setUsers(res.data.userlist);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div>user admin</div>
    </div>
  );
};

export default User;
