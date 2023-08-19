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
      <div className="flex justify-between mb-20">
        <h2 className="text-3xl font-semibold capitalize ">
          Recent publications
        </h2>
        <button className="uppercase flex items-center gap-2 ">
          view more <BsFillArrowRightCircleFill />
        </button>
      </div>
      <div>
        {newGame.map((game) => (
          <div key={game?.id} className="flex mt-12 ">
            <div className="w-4/12  ">
              <img
                className="w-80 h-[285px] rounded-md"
                src={game?.gameImage}
                alt=""
              />
            </div>
            <div className="w-8/12 px-3">
              <h2 className="text-2xl mt-4 font-semibold">{game?.name}</h2>
              <p className="mt-4 mb-7">{game?.publicationDate}</p>
              <p className="">{game?.details}</p>
              <button className="uppercase mt-9 flex items-center gap-2 ">
                read more <BsFillArrowRightCircleFill />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
