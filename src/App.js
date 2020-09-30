import React from "react";
import PropTypes from "prop-types";

function Name({ l_name, name }) {
  return (
    <h1>
      My name is {name} {l_name}
    </h1>
  );
}

const names = [
  {
    id: 1,
    last_name: "kim",
    name: "seo",
  },
  {
    id: 2,
    last_name: "lee",
    name: "min",
  },
  {
    id: 3,
    last_name: "park",
    name: "jun",
  },
  {
    id: 4,
    last_name: "seo",
    name: "chang",
  },
];

function App() {
  return (
    <div className="App">
      {names.map((f_name) => (
        <Name key={f_name.id} l_name={f_name.last_name} name={f_name.name} />
      ))}
    </div>
  );
}

export default App;
