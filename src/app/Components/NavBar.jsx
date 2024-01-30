"use client";
import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";
import SearchBox from "./SearchBox";
// import { getRandomManga } from "../API/request";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  // const randomize = async () => {
  //   const id = await getRandomManga();
  //   router.push(`/manga/${id}`);
  // };

  return (
    <nav className="mx-auto max-w-screen-2xl">
      {/* Logo And Search : Top */}
      <div className="flex h-10 w-full items-center justify-between px-2 py-6 md:px-20">
        <Link
          href="/"
          className="color-text text-xl font-semibold tracking-wide"
        >
          AnimeSensei
        </Link>

        <div className="color-text flex items-center gap-3 md:gap-5">
          <SearchBox />
          <ToggleSwitch />
        </div>
      </div>

      {/* Links : Bottom */}
      <div className="flex items-center justify-between bg-[#9b51e0] px-2 text-white md:px-28">
        {/* Left Side : User Related */}
        <div className="flex">
          <Link
            href="#"
            className="px-2 py-[10px] text-xs font-normal hover:bg-purple-500 md:px-5 md:text-base"
          >
            Bookmarks
          </Link>
          <Link
            href="#"
            className="px-2 py-[10px] text-xs font-normal hover:bg-purple-500 md:px-5 md:text-base"
          >
            Social
          </Link>
          <Link
            href="#"
            className="px-2 py-[10px] text-xs font-normal hover:bg-purple-500 md:px-5 md:text-base"
          >
            Genres
          </Link>
          <Link
            href="#"
            className="px-2 py-[10px] text-xs font-normal hover:bg-purple-500 md:px-5 md:text-base"
          >
            Movies
          </Link>
        </div>
        {/* Right Side : Site Related */}
        <div className="flex items-center">
          <button
            type="button"
            // onClick={() => randomize()}
            className="mx-2 rounded bg-purple-800 px-3 md:px-5 py-2 md:py-1 text-xs hover:scale-105 md:text-base flex gap-1 items-center"
          >
            <p className="md:block hidden">Random</p>
            <i class="fa-solid fa-shuffle"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
