import { Button, Title  } from "@atoms/index";
import { IPizzaCard } from "./PizzaCard.props";

export const PizzaCard: React.FC<IPizzaCard> = ( {label} ) => {
    return (
        <>
        <Title text={label} />
        <Button label="Acheter" />
        </>
    )
}