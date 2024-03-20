import { API_URL } from "@/app/config";

export async function getInfoBlog(locale = "en") {
  const noCacheUrl = `${API_URL}/info-blogs?populate[platforms][fields][0]=name&populate[cover][fields][0]=url&locale=${locale}&_=${new Date().getTime()}`;

  const res = await fetch(noCacheUrl, {
    headers: {
      "Accept-Language": locale, // Usa el parámetro locale en el encabezado
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const { data } = await res.json();

  return data.map(({ attributes, id }) => {
    const { Titulo, platforms, description } = attributes;
    const { url: cover } = attributes.cover.data.attributes;
    const platformNames = platforms.data.map((platform) => platform.attributes.name);
    return { Titulo, description, cover, platformNames };
  });
}
