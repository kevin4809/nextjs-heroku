import { API_URL } from '@/app/config';

export async function getInfoBlog(locale = 'en') {
  const noCacheUrl = `${API_URL}/info-blogs?populate[platforms][fields][0]=name&populate[cover][fields][0]=url&locale=${locale}&_=${new Date().getTime()}`;

  const res = await fetch(noCacheUrl, {
    headers: {
      'Accept-Language': locale,
    },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  const { data } = await res.json();

  return data.map(({ id, attributes }) => {
    const { Titulo, platforms, description, cover } = attributes;
    const platformNames = platforms.data.map(({ attributes }) => attributes.name);
    const coverUrl = cover.data ? cover.data.attributes.url : null;
    const fullDescription = description.map((desc) => desc.children.map((child) => child.text).join('')).join('\n');

    return { id, Titulo, platformNames, description: fullDescription, cover: coverUrl };
  });
}
