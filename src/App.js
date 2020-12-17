import React, { useState } from "react";
import "./App.css";
import DarkLayer from "./objects/DarkLayer";
import GameWrapper from "./objects/GameWrapper";
import HeaderGame from "./components/HeaderGame";
import InternalHeader from "./components/InternalHeader";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRmv = () => setActiveAbout("");

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <GameWrapper></GameWrapper>

      <DarkLayer className={activeAbout}>
        <InternalHeader onClick={handleClickRmv} />
        <ProfileUser />
      </DarkLayer>
    </main>
  );
};

export default App;
