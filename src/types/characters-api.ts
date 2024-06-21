export interface CharactersAPIResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

export interface ComicsAPIResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ComicsData;
}

interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
}

interface Result {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}

interface ComicsData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ComicsResult[];
}

interface ComicsResult {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: VariantDescription;
  description: null | string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: Format;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: Series[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Characters;
}

interface Characters {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
}

interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: Role;
}

enum Role {
  Colorist = 'colorist',
  Editor = 'editor',
  Inker = 'inker',
  Letterer = 'letterer',
  Penciler = 'penciler',
  Penciller = 'penciller',
  PencillerCover = 'penciller (cover)',
  Writer = 'writer',
}

interface DateElement {
  type: DateType;
  date: string;
}

enum DateType {
  DigitalPurchaseDate = 'digitalPurchaseDate',
  FocDate = 'focDate',
  OnsaleDate = 'onsaleDate',
  UnlimitedDate = 'unlimitedDate',
}

enum Format {
  Comic = 'Comic',
}

interface Price {
  type: PriceType;
  price: number;
}

enum PriceType {
  DigitalPurchasePrice = 'digitalPurchasePrice',
  PrintPrice = 'printPrice',
}

enum Language {
  EnUs = 'en-us',
}

enum TextObjectType {
  IssuePreviewText = 'issue_preview_text',
  IssueSolicitText = 'issue_solicit_text',
}

enum VariantDescription {
  Empty = '',
  SpotlightVariant = 'SPOTLIGHT VARIANT',
  ZombieVariant = 'ZOMBIE VARIANT',
}

interface TextObject {
  type: TextObjectType;
  language: Language;
  text: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

interface ComicsItem {
  resourceURI: string;
  name: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

interface StoriesItem {
  resourceURI: string;
  name: string;
  type: ItemType;
}

enum ItemType {
  Cover = 'cover',
  Empty = '',
  InteriorStory = 'interiorStory',
}

interface Thumbnail {
  path: string;
  extension: Extension;
}

enum Extension {
  GIF = 'gif',
  Jpg = 'jpg',
}

interface URL {
  type: URLType;
  url: string;
}

enum URLType {
  Comiclink = 'comiclink',
  Detail = 'detail',
  Wiki = 'wiki',
}
