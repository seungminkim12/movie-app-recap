import React from "react";

function Name({ l_name }) {
  return <h1>My name is {l_name}</h1>;
}

const names = [
  {
    name: "kim",
  },
  {
    name: "lee",
  },
  {
    name: "park",
  },
  {
    name: "seo",
  },
];

function App() {
  return (
    <div className="App">
      {names.map((f_name) => (
        <Name l_name={f_name.name} />
      ))}
    </div>
  );
}

export default App;
