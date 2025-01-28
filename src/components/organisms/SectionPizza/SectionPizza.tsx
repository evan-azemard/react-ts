import { Title } from "@atoms/index";
import { PizzaCard } from "@molecules/index";

export const SectionPizza: React.FC = () => {
    return (
        <section>
            <Title variantTypo="h2" componentTypo="h2" text="Acheter nos pizzas" color="green"/>
            <PizzaCard  label="4 frommages"/>
            <PizzaCard  label="Royal"/>
            <PizzaCard  label="Impérial"/>
            <PizzaCard  label="Annanas"/>
            <PizzaCard  label="Pomme miel"/>
        </section>
    )
}