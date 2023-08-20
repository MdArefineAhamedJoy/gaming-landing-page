import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Publications = () => {
  const [newGame, setNewGame] = useState([]);
  useEffect(() => {
    fetch("publications.json")
      .then((res) => res.json())
      .then((data) => {
        setNewGame(data);
      });
  }, []);
  return (
    <div className="mt-32 text-white w-10/12 mx-auto">
      <div className="flex justify-between items-center mb-16">
        <h2 className="md:text-3xl text-xl font-semibold capitalize ">
          Recent publications
        </h2>
        <button class="relative  group overflow-hidden uppercase flex items-center gap-2">
          view more
          <BsFillArrowRightCircleFill className="  group-hover:text-pink-500 duration-500" />
          <span class="absolute inset-x-0 bottom-0 h-1 bg-pink-500 transform transition-transform duration-500 translate-x-[-110%] group-hover:translate-x-0"></span>
        </button>
      </div>
      <div>
        {newGame.map((game) => (
          <div key={game?.id} className="md:flex mt-12 ">
            <div className="md:w-4/12  ">
              <img
                className="w-80 h-[285px] rounded-md"
                src={game?.gameImage}
                alt=""
              />
            </div>
            <div className="md:w-8/12  px-3">
              <h2 class="relative text-2xl mt-4 font-semibold  group overflow-hidden inline-block  ">
                {game?.name}
                <span class="absolute inset-x-0 bottom-0 h-1 bg-pink-500 transform transition-transform duration-500 translate-x-[-110%] group-hover:translate-x-0"></span>
              </h2>
              <p className="mt-4 mb-6">{game?.publicationDate}</p>
              <p className="leading-7 text-lg">{game?.details}</p>
              <button class="relative mt-5 group overflow-hidden uppercase text-md flex items-center gap-2">
                Read more
                <BsFillArrowRightCircleFill className=" text-white  group-hover:text-pink-500 duration-500" />
                <span class="absolute inset-x-0 bottom-0 h-1 bg-pink-500 transform transition-transform duration-500 translate-x-[-110%] group-hover:translate-x-0"></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
