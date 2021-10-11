import React from "react";
import { Route } from "react-router-dom";

import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Join} />
      <Route path="/chat" component={Chat} />
    </div>
  );
}

export default App;
