import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/players`
        );
        setPlayers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>Playerlist</h1>
      {players.map((player, index) => {
        return (
          <p key={index}>
            {" "}
            <strong>Firstname: </strong>
            {player.firstName} <br></br> <strong>Lastname: </strong>
            {player.lastName} <br></br>
            <strong>Fotball-club:</strong> {player.club}
            <br></br>
            <strong>Position:</strong> {player.position}
            <br></br>
            <strong>Year of birth:</strong> {player.yearOfBirth}
          </p>
        );
      })}
      {/* {JSON.stringify(players)} */}
    </div>
  );
}
