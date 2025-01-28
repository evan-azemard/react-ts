import { ITitle } from "./Title.props";
import "./Title.css";

export const Title: React.FC<ITitle>  = ({ text }) => {
    return (
        <h2
        className="title-font"
        >
        {text}</h2>
    )
}