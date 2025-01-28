import React, { useEffect, useState } from "react"
import { IArticle } from "../types/IArticle.interface";
import axios from "axios";
import { IUseArticlesState } from "../types/IUseArticlesState.interface";

export const useArticles =  () => {



    const [state, setState] = useState<IUseArticlesState>({
        articles: [],
        loading: true,
        error: null
    });

    const fetchArticles = async (): Promise<void> => {
        try {
            const response = await axios.get<IArticle[]>(
                'https://jsonplaceholder.typicode.com/posts?_limit=10'
            );
            
            const articlesWithLikes = response.data.map(article => ({
                ...article,
                liked: false
            }));

            setState({
                articles: articlesWithLikes,
                loading: false,
                error: null
            });
        } catch (error: unknown) {
            if (error instanceof Error) {
            setState({
                articles: [],
                loading: false,
                error: `Erreur lors du chargement des articles: ${error.message}`
            });
        }
        }
    };

    const handleLike = (articleId: number): void => {
        setState(prevState => ({
            ...prevState,
            articles: prevState.articles.map(article => 
                article.id === articleId
                    ? { ...article, liked: !article.liked }
                    : article
            )
        }));
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    return { ...state, handleLike };
}