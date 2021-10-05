import React, { useState } from "react";
import data from "./data";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [people, setPepole] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays For Today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPepole([]);
          }}
        >
          Clear All{" "}
        </button>
      </section>
    </main>
  );
};

export default App;
