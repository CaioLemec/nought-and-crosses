import React from "react";
import "./styles.css";
import GameCard from "../../objects/GameCard";
import GamePlayer from "../../objects/GamePlayer";

const HashtagGame = ({ historyPlayed, onClick, lastRound }) => {
  return (
    <GameCard>
      <ul className="hashtag-game">
        {historyPlayed[lastRound].state.map((player) => (
          <li
            key={player.id}
            className="item"
            onClick={() => player.content === "" && onClick(player.id)}
          >
            <GamePlayer id={player.id} content={player.content} />
          </li>
        ))}
      </ul>
    </GameCard>
  );
};

export default HashtagGame;

//PLAYERS: cross or nought
