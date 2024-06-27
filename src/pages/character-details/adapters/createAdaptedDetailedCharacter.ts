import { CharactersAPIResponse, ComicsAPIResponse } from '@/types/characters-api';
import { DetailedCharacter } from '../types/detailed-character';
import { getSecureUrl } from '@/utils';

export default function createAdaptedDetailedCharacter(
  characterResponse: CharactersAPIResponse,
  comicsData: ComicsAPIResponse,
): DetailedCharacter {
  const comics = comicsData.data.results.map((comic) => {
    const { id, title, thumbnail } = comic;
    const onSaleDate = comic.dates.find((d) => d.type === 'onsaleDate');
    const date = onSaleDate.date;
    const year = date.slice(0, 4);
    return {
      id,
      title,
      thumbnail: getSecureUrl(`${thumbnail.path}.${thumbnail.extension}`),
      year: Number(year),
    };
  });
  const mapped = characterResponse.data.results.map(({ id, name, thumbnail, description }) => {
    const thumbnailSrc = `${thumbnail.path}.${thumbnail.extension}`;
    return {
      id,
      name,
      thumbnail: getSecureUrl(thumbnailSrc),
      description,
      comics,
    };
  });
  return mapped[0];
}
