export default function PlayerNameInput({ usernName }) {
  return (
  <input
    type="text"
    value={userName}
    required
    onChange={(e) => {
      const un = e.target.value;
      setUserName(un);
    }}
  />)
}
