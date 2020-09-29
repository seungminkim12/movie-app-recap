import React from "react";

function Name({ l_name }) {
  return <h1>My name is {l_name}</h1>;
}

const names = [
  {
    id: 1,
    name: "kim",
  },
  {
    id: 2,
    name: "lee",
  },
  {
    id: 3,
    name: "park",
  },
  {
    id: 4,
    name: "seo",
  },
];

function App() {
  return (
    <div className="App">
      {names.map((f_name) => (
        <Name key={f_name.id} l_name={f_name.name} />
      ))}
    </div>
  );
}

export default App;
