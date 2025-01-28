import { ICustomButton} from "./CustomButton.props";
import "./CustomButton.css";
import Button from '@mui/material/Button';

export const CustomButton: React.FC<ICustomButton> = ( { label }) => {
    return (
        <Button
        variant="contained"
        className="button-background"
        >
            { label }
        </Button>
    )
}