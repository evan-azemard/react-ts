export interface IInputProps {
    value: string;
    placeholder?: string;
    type?: 'text' | 'number';
    onChange: (value: string) => void;
}