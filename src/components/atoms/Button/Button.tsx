import { IButton } from "./Button.props";
import "./Button.css";

export const Button: React.FC<IButton> = ( { label }) => {
    return (
        <button
        className="button-background">
            { label }
        </button>
    )
}