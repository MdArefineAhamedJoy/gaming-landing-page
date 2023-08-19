import React, { useEffect, useState } from "react";

const GameStoreCard = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("gameCard.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);
  return (
    <div className="text-white mt-32 w-10/12 mx-auto">
      <div className="text-center">
        <small className="uppercase inline-block bg-[#d31c3e] py-1 font-bold rounded-ss-lg rounded-ee-xl rounded px-4">
          Game
        </small>
        <h2 className="font-semibold text-3xl py-5">From Our Store</h2>
        <p>
          Second them us fill gathering creature his doesn’t isn’t winged was to
          give thing there, fifth <br /> make our gathered which. Lights had
          divided together
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-20">
        {games.map((game) => (
          <div key={game.id}>
            <div className="h-48 w-80">
              <img className="rounded h-full w-full" src={game.gameImage} alt="" />
            </div>
            <div>
                <p>{game.rating}</p>
                <p>{game.model}</p>
                <p>{game.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStoreCard;
