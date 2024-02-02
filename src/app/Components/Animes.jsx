"use client";
import { makeRequest } from "@/API/request";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Animes = ({ movies, filter, search }) => {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    makeRequest(
      `${
        movies
          ? `/movies?page=${page}`
          : filter
          ? `/genre/${filter}?page=${page}`
          : search
          ? `/${search}?page=${page}`
          : "/recent-episodes"
      }`,
      {
        cache: "force-cache",
      }
    ).then((res) => {
      setLoading(false);
      setAnimes(res);
    });
  }, [page]);

  return (
    <div className="background min-h-[50vh] h-full w-full rounded-none md:rounded relative">
      <header className="flex items-center justify-between border-b border-[#fff2] px-2 py-1 md:py-2">
        <p className="text-md md:text-lg">
          {movies
            ? "Movies"
            : filter
            ? filter
            : search
            ? "Search Results"
            : "Latest"}
        </p>
        {movies || filter ? (
          <div>
            <button
              className={`px-2 text-white py-1 text-xs md:text-sm mx-1 rounded-sm ${
                page === 1 ? "bg-[#fff1]" : "bg-purple-500 hover:scale-105"
              }`}
              disabled={page === 1 ? true : false}
              onClick={() => setPage((prev) => parseInt(prev) - 1)}
            >
              Prev
            </button>
            <input
              type="number"
              className="increment-disabled mx-1 text-center text-white border-[#fff3] border bg-transparent max-w-10 p-1 rounded-md"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
            <button
              className={`px-2 text-white py-1 text-xs md:text-sm mx-1 rounded-sm ${
                !animes?.hasNextPage
                  ? "bg-[#fff1]"
                  : "bg-purple-500 hover:scale-105"
              }`}
              disabled={!animes?.hasNextPage}
              onClick={() => setPage((prev) => parseInt(prev) + 1)}
            >
              Next
            </button>
          </div>
        ) : search ? (
          ""
        ) : (
          <Link
            href="#"
            className="rounded bg-purple-500 px-2 py-1 text-xs text-white md:text-sm"
          >
            View All
          </Link>
        )}
      </header>
      {/* Manga Feed */}
      <div className="h-auto w-full gap-3 p-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        {!loading ? (
          animes?.results !== undefined && animes?.results?.length !== 0 ? (
            animes?.results?.map((anime, index) => (
              <Link
                key={index}
                title={anime?.title}
                className="group w-full overflow-hidden hover:scale-[1.01] px-1 md:px-0"
                href={`/${anime?.id}`}
              >
                <img
                  className="z-10 mx-auto aspect-[1/1.5] max-h-52 w-full rounded object-cover"
                  src={anime?.image}
                  alt={anime?.title}
                />
                <p
                  className="my-1 h-5 overflow-hidden text-center text-sm group-hover:text-purple-500 md:text-base"
                  title={anime?.title}
                >
                  {anime?.title}
                </p>
              </Link>
            ))
          ) : (
            <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
              There are no animes found. <br /> Try searching something else.
            </div>
          )
        ) : (
          <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            Loading...
          </div>
        )}
      </div>
      {(movies || filter || search) && animes?.hasNextPage && (
        <div className="absolute bottom-5 right-5">
          <button
            className={`px-2 text-white py-1 text-xs md:text-sm mx-1 rounded-sm ${
              page === 1 ? "bg-[#fff1]" : "bg-purple-500 hover:scale-105"
            }`}
            disabled={page === 1 ? true : false}
            onClick={() => setPage((prev) => parseInt(prev) - 1)}
          >
            Prev
          </button>
          <input
            type="number"
            className="increment-disabled mx-1 text-center text-white border-[#fff3] border bg-transparent max-w-10 p-1 rounded-md"
            value={page}
            onChange={(e) => setPage(e.target.value)}
          />
          <button
            className={`px-2 text-white py-1 text-xs md:text-sm mx-1 rounded-sm ${
              !animes?.hasNextPage
                ? "bg-[#fff1]"
                : "bg-purple-500 hover:scale-105"
            }`}
            disabled={!animes?.hasNextPage}
            onClick={() => setPage((prev) => parseInt(prev) + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Animes;
