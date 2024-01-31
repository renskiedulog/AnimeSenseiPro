import Link from "next/link";
import React from "react";
import AnimeFeed from "./AnimeFeed";

const Animes = () => {
  return (
    <div className="background h-full w-full rounded-none md:rounded">
      <header className="flex items-center justify-between border-b border-[#fff2] px-2 py-1 md:py-2">
        <p className="text-md md:text-lg">Latest</p>
        <Link
          href="#"
          className="rounded bg-purple-500 px-2 py-1 text-xs text-white md:text-sm"
        >
          View All
        </Link>
      </header>
      {/* Manga Feed */}
      <div className="h-auto w-full gap-3 p-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        <AnimeFeed />
      </div>
    </div>
  );
};

export default Animes;
