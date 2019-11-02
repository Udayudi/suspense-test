import React, { Suspense } from "react";
import "./App.css";
import { createResource } from "./PersonApi";
import { Person } from "./Person";
import { Num } from "./Num";

const resource = createResource();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading.....</h1>}>
        <div>another random string</div>
        <Num resource={resource} />
        <Person resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
