import { Character } from '@/types/character';
import { CharactersAPIResponse } from '@/types/characters-api';

export default function createAdaptedCharacter(
  charactersResponse: CharactersAPIResponse,
): Character[] {
  const {
    data: { results },
  } = charactersResponse;
  return results.map(({ id, name, thumbnail }) => {
    const thumbnailSrc = `${thumbnail.path}.${thumbnail.extension}`;
    return {
      id,
      name,
      thumbnail: thumbnailSrc,
    };
  });
}
