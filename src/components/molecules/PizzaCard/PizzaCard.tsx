import { CustomButton, Title  } from "@atoms/index";
import { IPizzaCard } from "./PizzaCard.props";

export const PizzaCard: React.FC<IPizzaCard> = ( {label} ) => {
    return (
        <>
        <Title variantTypo="h4" componentTypo="h4" text={label} color="gray" />
        <CustomButton label="Acheter" />
        </>
    )
}