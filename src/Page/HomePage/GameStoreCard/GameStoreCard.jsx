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
          <div key={game.id} className="group relative ">
            <div className="h-48 w-80 relative">
              <img
                className="rounded h-full w-full "
                src={game.gameImage}
                alt=""
              />
              <p className=" absolute bottom-0 left-4">{game.rating}</p>
            </div>
            <div className="mt-2">
              <p className="font-semibold text-xl mt-3 mb-1">{game.model}</p>
              <div>
                <p className="group-hover:hidden duration-300">{game.price}</p>
                <button className="relative hidden group duration-300 group-hover:block text-center text-md group overflow-hidden uppercase">
                  add to cart
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-pink-500 transform transition-transform duration-500 translate-x-[-110%] group-hover:translate-x-0"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStoreCard;
