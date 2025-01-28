import React from "react";
import { SearchBar } from "@molecules/SearchBar";
import { Button } from "@atoms/Button";
import { IHeaderProps } from "./Header.props";

export const Header: React.FC<IHeaderProps> = ({
  onSearch,
  onLogout,
  userName,
}) => {
  return (
    <header className="main-header">
      <div className="logo">MyApp</div>
      <SearchBar onSearch={onSearch} />
      <div className="user-section">
        {userName ? (
          <>
            <span>Bienvenue, {userName} !</span>
            <Button label="Se déconnecter" onClick={onLogout} />
          </>
        ) : (
          <Button
            label="Se connecter"
            onClick={() => console.log("Login form")}
          />
        )}
      </div>
    </header>
  );
};
