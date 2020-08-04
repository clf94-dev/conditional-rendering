import React from "react";
import Login from "./Login";

var log = false;
const currentTime = new Date();
console.log(currentTime.getHours());
//function isLoggedIn() {
//  if (log) {
//    return <h1>Hello</h1>;
//  } else {
//    return <Login />;
//  }
//}

function App() {
  return (
    <div className="container">
      {log ? <h1>Hello</h1> : <Login />}
      {currentTime.getHours() > 12 && <h1> Why are you still doing this </h1>}
    </div>
  );
}

export default App;
