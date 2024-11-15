// https://developers.giphy.com/dashboard/

const apiKey = "LnWC3oYgVr2xz8wmak19WeZ32tPNuNvJ";

const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const getRandomGifUrl = async (): Promise<String> => {
  try {
    const resp = await fetch(apiUrl);
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return "No se pudo cargar el gif";
  }
};

export { getRandomGifUrl };
