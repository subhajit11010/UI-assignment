import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
