"use client";
import { useState } from "react";
import Link from "next/link";

const Episodes = ({ episodes, animeId }) => {
  console.log(episodes);
  const [maxEpisodes, setMaxEpisodes] = useState(99);
  const [minEpisodes, setMinEpisodes] = useState(-1);
  const [currentSet, setCurrentSet] = useState({ min: 0, max: 100 });
  const itemsPerPage = 100;

  const buttonCount = Math.ceil(episodes?.length / itemsPerPage);

  const handleFilter = (min, max) => {
    setMinEpisodes(min);
    setMaxEpisodes(max);
    setCurrentSet({ min: min, max: max });
  };

  const filterButtons = Array.from({ length: buttonCount }, (v, index) => {
    const start = index * itemsPerPage;
    const end = Math.min((index + 1) * itemsPerPage - 1, episodes.length - 1);
    const label = `${start + 1} - ${end + 1}`;

    return (
      <button
        key={`button-${index}`}
        className={`px-1 md:px-2 py-1 rounded text-xs md:text-sm w-24 flex-grow hover:scale-105 ${
          currentSet?.min === start || currentSet?.max === end
            ? "bg-purple-500"
            : "bg-[#fff1]"
        }`}
        onClick={() => handleFilter(start, end)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="background mt-3 rounded">
      <h1 className="font-bold border-b border-[#fff2] w-full">EPISODES</h1>
      {episodes?.length > itemsPerPage && (
        <div className="px-3 py-2 flex flex-wrap gap-2">{filterButtons}</div>
      )}
      {episodes?.length === 0 ? (
        <p>There are no episodes found.</p>
      ) : (
        <div className="flex flex-wrap gap-2 md:gap-3 px-3 py-2 md:max-h-80 max-h-48 overflow-y-scroll scrollbar">
          {episodes?.map((episode, index) => {
            if (index >= minEpisodes && index <= maxEpisodes) {
              return (
                <Link
                  key={episode?.number}
                  href={`/${animeId}/watch/${episode.id}`}
                  className="bg-purple-500 hover:scale-105 px-2 py-1 w-20 flex-grow max-w-24 md:w-24 md:max-w-32"
                >
                  <div className="text-center text-xs md:text-base">
                    <p>EP {episode.number}</p>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Episodes;
