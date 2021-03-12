import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style/reset.scss";

function App() {
  return (
    <div className="App">
      {/* 路由 */}
      <HashRouter>
        {/* Switch 非贪婪模式，匹配成功即停止 */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
