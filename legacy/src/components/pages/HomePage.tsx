import React from "react";
import { Header } from "@organisms/Header";

export const HomePage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Recherche lancée pour:", query);
    // Plus tard ici appel API tanstack query
  };

  const handleLogout = () => {
    console.log("Déconnexion...");
    // store.logout() avec zustand
  };

  return (
    <div>
      <Header onSearch={handleSearch} onLogout={handleLogout} userName="Alice" />
      <main style={{ padding: '20px' }}>
        <h1>Bienvenue sur la HomePage!</h1>
        <p>Voici un exemple de page utilisant nos Atoms, Molecules et Organisms.</p>
      </main>
    </div>
  );
};