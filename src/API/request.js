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
    const top = await makeRequest("/top-airing", { cache: 'force-cache' });
    const popular = await makeRequest("/popular", { cache: 'force-cache' });
    return { top: top.results, popular: popular.results }
}

export const getCarousel = async () => {
    let maxPage = 5, page = 1;
    const result = [];
    const carousel = [];
    while (page < maxPage) {
        const request = await makeRequest(`/popular?page=${page}`, { cache: 'force-cache' });
        result.push(...(request?.results || []))
        page++;
    }
    for (let i = 0; i < 5; i++) {
        let randIndex = Math.floor(Math.random() * result?.length - 1);
        const req = await makeRequest(`/info/${result[randIndex]?.id}`);
        carousel.push(req);
        result.splice(result[randIndex], 1);
    }
    return carousel;
}