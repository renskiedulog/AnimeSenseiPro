import Link from "next/link";
import Episodes from "@/app/Components/Episodes";
import { makeRequest } from "./../../../../API/request";

const page = async ({ params }) => {
  const anime = await makeRequest(`/info/${params?.id}`);
  return (
    <div className="min-h-[90vh] py-10 text-center font-bold text-white">
      <div>
        <h1 className="text-2xl">{anime?.title}</h1>
        <h1 className="text-xl">Episode {anime?.episodes[params.episodeId]}</h1>
        <div className="flex items-center justify-center gap-1 text-xs font-normal opacity-80 ">
          <p>Anime Details Can Be Found In</p>
          <Link
            href={`/manga/${params.id}`}
            className="text-sm font-bold hover:text-purple-500"
          >
            {anime?.title}
          </Link>
        </div>
        <div className="mx-auto my-2 flex w-3/5 flex-wrap items-center justify-center gap-1">
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-indigo-700 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-facebook-f"></i>
            Facebook
          </Link>
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-blue-500 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-twitter"></i>
            Twitter
          </Link>
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-green-500 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-whatsapp"></i>
            Whatsapp
          </Link>
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-indigo-500 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-discord"></i>
            Discord
          </Link>
          <Link
            href="#"
            className="flex min-w-20 items-center gap-2 rounded bg-red-700 px-2 py-1 text-xs font-normal tracking-wide text-white hover:scale-105"
          >
            <i className="fa-brands fa-pinterest"></i>
            Pinterest
          </Link>
        </div>
      </div>

      <Episodes
        episodes={anime?.episodes}
        animeId={anime?.id}
        episodeId={params?.episodeId}
      />
    </div>
  );
};

export default page;
