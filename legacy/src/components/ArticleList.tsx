import React from "react";
import { useArticles } from "../hooks/useArticles.hook";
import { ArticleCard } from "./ArticleCard";

export const ArticleList: React.FC = () => {

    const { articles, loading, error, handleLike } = useArticles();

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;
   
    return (
        <ArticleCard articles={articles} handleLike={handleLike}/>
    );
}