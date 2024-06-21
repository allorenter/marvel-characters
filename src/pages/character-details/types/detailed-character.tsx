export interface DetailedCharacter {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  comics: Comic[];
}

type Comic = {
  id: number;
  title: string;
  thumbnail: string;
  year: number;
};
