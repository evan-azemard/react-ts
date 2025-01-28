export interface IHeaderProps {
    onSearch: (query: string) => void;
    onLogout: () => void;
    userName?: string;
}