import { useState, useEffect } from "react";

function PlayersList() {
  const URL = "http://localhost:3000/api/players";
  const [players, setPlayers] = useState([]);
  //Use effect helps with fetching api
  useEffect(() => {
    // async await
    const fetchPlayers = async () => {
      //fetchs json from api
      let data = await fetch(URL);
      const dataResponse = await data.json();
      setPlayers(dataResponse);
    };
    fetchPlayers();
  }, []);

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

export default PlayersList;
