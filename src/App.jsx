// frontend/src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* 其他路由將在這裡添加 */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
