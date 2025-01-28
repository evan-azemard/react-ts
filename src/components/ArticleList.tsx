import React from "react";
import { useArticles } from "../hooks/useArticles.hook";

export const ArticleList: React.FC = () => {

    const { articles, loading, error, handleLike } = useArticles();

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;
   
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
                            backgroundColor: article.liked ? '#4CAF50' : '#f1f1f1',
                            color: article.liked ? 'white' : 'black'
                        }}
                    >
                        {article.liked ? '❤️ Liked' : '🤍 Like'}
                    </button>
                </div>
            ))}
        </div>
    );
}