export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string, name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export interface GetArticles {
  totalResults: number;
  articles: Article[];
}

export type TSortType = 'relevancy' | 'popularity' | 'publishedAt';

export enum SortType {
  RELEVANCY = 'relevancy',
  POPULARITY = 'popularity',
  PUBLISHED_AT = 'publishedAt',
}

export interface IPagination {
  totalResults: number;
  pageSize: number;
  setPage: any;
}
