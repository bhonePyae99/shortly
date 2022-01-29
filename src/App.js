import "./App.css";
import { useState } from "react";
import MainContext from "./context/MainContext";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
function App() {
  const [links, setLinks] = useState([]);

  return (
    <>
      <MainContext.Provider value={{ links, setLinks }}>
        <NavBar />
        <Body />
      </MainContext.Provider>
    </>
  );
}

export default App;
