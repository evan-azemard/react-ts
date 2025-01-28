import React from "react";
import { IArticle } from "../types/IArticle.interface";

interface ArticleCardProps {
    articles: IArticle[];
    handleLike: (id: number) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ articles, handleLike }) => {
    return (
        <div>
            <h1>Articles</h1>
            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                    <button
                        onClick={() => handleLike(article.id)}
                        style={{
                            backgroundColor: article.liked ? "#4CAF50" : "#f1f1f1",
                            color: article.liked ? "white" : "black",
                        }}
                    >
                        {article.liked ? "❤️ Liked" : "🤍 Like"}
                    </button>
                </div>
            ))}
        </div>
    );
};
