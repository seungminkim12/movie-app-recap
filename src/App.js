import React from "react";

function Name({ l_name }) {
  return <h1>My name is {l_name}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Name l_name="Kim" />
      <Name l_name="Lee" />
      <Name l_name="Park" />
      <Name l_name="Choi" />
    </div>
  );
}

export default App;
