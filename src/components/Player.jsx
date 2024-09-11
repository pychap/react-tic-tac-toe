import { useState } from "react";
import PlayerNameInput from "./PlayerNameInput";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState("Name");
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(foo => !isEditing);
  }

  function handleChange(e){
    setPlayerName(e.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      //  <PlayerNameInput playerName={playerName} />
      <input 
      type="text" 
      required 
      value={playerName}
      onChange={handleChange}
       />
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    // playerName = playerName;
  }

  return (
    <li>
      <form action="" onSubmit={handleSubmit}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </form>
    </li>
  );
}
