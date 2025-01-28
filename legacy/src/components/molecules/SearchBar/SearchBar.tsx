import { useState } from "react";
import { ISearchBarProps } from "./SearchBar.props";

import { Button, Input } from "@atoms/index";

export const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <Input value={query} onChange={setQuery} placeholder="Rechercher..." />
      <Button label="Go" onClick={handleSearch} />
    </div>
  );
};
