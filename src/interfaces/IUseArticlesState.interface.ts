import { IArticle } from "./IArticle.interface";

export interface IUseArticlesState {
    articles: IArticle[];
    loading: boolean;
    error: string | null;
}