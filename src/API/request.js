const baseUrl = "https://anime-sensei-api.vercel.app/anime/gogoanime";

export const makeRequest = async (endpoint, config) => {
    const url = `${baseUrl}${endpoint}`;
    try {
        const request = await fetch(url, config);
        return await request.json();
    } catch (e) {
        return [];
    }
};

export const getTopAnimes = async () => {
    const top = await makeRequest("/top-airing", { revalidate: 3600 });
    const popular = await makeRequest("/popular", { revalidate: 3600 });
    return { top: top.results, popular: popular.results }
}

export const getCarousel = async () => {
    let maxPage = 7, page = 1;
    const carousel = [];
    while (page < maxPage) {
        let randomPage = Math.floor(Math.random() * 10),
            randomIndex = Math.floor(Math.random() * 20);
        const req = await makeRequest(`/popular?page=${randomPage}`, { cache: 'no-cache' });
        const randomAnime = req.results[randomIndex];
        const animeInfo = await makeRequest(`/info/${randomAnime?.id}`);
        carousel.push(animeInfo);
        page++
    }
    return carousel;
}

export const getRandomAnime = async () => {
    let randomPage = Math.floor(Math.random() * 500),
        randomIndex = Math.floor(Math.random() * 20);
    const req = await makeRequest(`/popular?page=${randomPage}`, { cache: 'no-cache' });
    const randomAnime = req.results[randomIndex];
    return randomAnime?.id;
}