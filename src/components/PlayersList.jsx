import { useEffect, useState } from "react";
import getAllPlayers from "./Services/Api";

export default function PlayerList() {
  //State to hold the list of players
  const [players, setPlayers] = useState([]);

  //Function to load players from the API
  async function loadPlayers() {
    let data = await getAllPlayers();
    setPlayers(data);
  }
  //Use useEffect to load players when the component mounts
  useEffect(() => {
    loadPlayers();
  }, []);

  //Render the list of players
  return (
    <>
      <>
        <h1>Players List</h1>
      </>
      {players.map((player) => (
        <div key={player.id}>
          <h3>Player Name: {player.name}</h3>
          <p>Armor Class: {player.armorClass}</p>
          <p>Current HP: {player.currentHp}</p>
          <p>Max HP: {player.maxHp}</p>
          <p>Initiative: {player.initiative}</p>
        </div>
      ))}
    </>
  );
}
