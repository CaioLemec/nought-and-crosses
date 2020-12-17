import React, { useState } from "react";
import "./styles.css";
import InputCheckbox from "../../objects/InputCheckbox";
import HistoryGame from "../../components/HistoryGame";
import HashtagGame from "../../components/HashtagGame";

const GameWrapper = () => {
  const [history, setHistory] = useState(["Get ready!"]);
  const [active, setActive] = useState(false);
  const [nextPlayer, setNextPlayer] = useState("nought");
  const [lastRound, setLastRound] = useState(0);
  const [historyPlayed, setHistoryPlayed] = useState([
    {
      round: 0,
      state: [
        { id: 1, content: "" },
        { id: 2, content: "" },
        { id: 3, content: "" },
        { id: 4, content: "" },
        { id: 5, content: "" },
        { id: 6, content: "" },
        { id: 7, content: "" },
        { id: 8, content: "" },
        { id: 9, content: "" },
      ],
    },
  ]);

  const addHistory = (player) => {
    setHistory((old) => [
      ...old,
      `${player
        .substring(0, 1)
        .toUpperCase()
        .concat(player.substring(1))} added!`,
    ]);
  };

  const showHideHistory = () => {
    // setActive(old => old ? false : true);
    setActive((old) => !!!old);
  };

  const changeHistory = (key) => {
    // Slice just work on arrys.
    setLastRound(key);
    setHistory((old) => old.slice(0, key + 1));
    setHistoryPlayed((old) => old.slice(0, key + 1));
  };

  const handleClick = (id) => {
    setHistoryPlayed((old) => [
      ...old,
      {
        round: lastRound + 1,
        state: old[lastRound].state.map((player) =>
          player.id === id ? { id, content: nextPlayer } : player
        ),
      },
    ]);
    setLastRound((old) => old + 1);
    addHistory(nextPlayer);
    setNextPlayer((old) => (old === "nought" ? "cross" : "nought"));
  };

  return (
    <div className={`game-wrapper ${active && "-active"}`}>
      <HashtagGame
        lastRound={lastRound}
        historyPlayed={historyPlayed}
        onClick={handleClick}
      />
      <InputCheckbox
        onClick={showHideHistory}
        id="show"
        type="checkbox"
        value="show"
        content="Show Events"
      />
      <HistoryGame history={history} onClick={changeHistory} />
    </div>
  );
};

export default GameWrapper;
