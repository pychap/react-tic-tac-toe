import { useState } from "react";
import PlayerNameInput from "./PlayerNameInput";

export default function Player({ name, symbol }) {
  const [userName, setUserName] = useState("Name");
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(barney => !isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      //  <PlayerNameInput userName={userName} />
      <input type="text" required value={name} />
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <li>
      <form action="" onSubmit={handleSubmit}>
        <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </form>
    </li>
  );
}
