const axios = require("axios");

axios
  .post("http://159.75.122.22:3001/api/register", {
    nickname: "管理员",
    username: "admin",
    password: "admin1+1",
  })
  .then(
    (res) => {
      console.log(res.data);
    },
    (err) => {
      console.log(err);
    }
  );
