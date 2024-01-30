import { makeRequest } from "@/API/request";
import Link from "next/link";

export const AnimeFeed = async () => {
  const animes = await makeRequest("/recent-episodes", {
    cache: "force-cache",
  });

  return animes?.results?.map((anime, index) => (
    <Link
      key={index}
      className="group w-full overflow-hidden hover:scale-[1.01] px-2 md:px-0"
      href={`/info/${anime?.id}`}
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
  ));
};

export default AnimeFeed;
