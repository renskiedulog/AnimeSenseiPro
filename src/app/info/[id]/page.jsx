import { getTopAnimes, makeRequest } from "@/API/request";
import PopularAnimes from "../../Components/PopularAnimes";
import AnimeInfo from "../../Components/AnimeInfo";
import Link from "next/link";

const page = async ({ params }) => {
  const anime = await makeRequest(`/info/${params?.id}`);
  const popular = await getTopAnimes();
  return (
    <div className="color-text m-5 grid max-w-screen-2xl grid-cols-1 gap-2 md:mx-auto md:gap-5 md:px-16 md:py-16 lg:grid-cols-[70%,30%]">
      <div>
        {/* Navigation Link */}
        <div className="background mb-2 flex h-max w-full gap-2 rounded bg-[#fff1] px-5 py-3 text-sm">
          <Link href="/" className="hover:text-purple-500">
            Home
          </Link>
          <span>/</span>
          <p>{anime?.title}</p>
        </div>
        {/* Manga Info */}
        <AnimeInfo anime={anime} />
        {/* Manga Chapters */}
        {/* <Chapters mangaId={params.id} chapters={chapter} /> */}
      </div>
      <PopularAnimes animes={popular} />
    </div>
  );
};

export default page;
