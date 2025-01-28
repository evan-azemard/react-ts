import { ITitle } from "./Title.props";
import "./Title.css";
import { Typography } from "@mui/material";

export const Title: React.FC<ITitle>  = ({ variantTypo = "h4", componentTypo, text, color="black" }) => {
    return (
        <Typography 
        variant={variantTypo} 
        component={componentTypo}
        color={color}
        className="title-font"
        >
        {text}
        </Typography>
    )
}