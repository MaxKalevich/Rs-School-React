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

export interface IPagination {
  totalResults: number;
  pageSize: number;
}

export interface IArticleProps {
  totalResults: number;
  articles: Article[];
  page: number | string;
  pageSize: number;
}

export interface IParamTypes {
  title: string;
}
