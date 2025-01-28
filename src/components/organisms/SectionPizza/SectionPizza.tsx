import { Title } from "@atoms/index";
import { PizzaCard } from "@molecules/index";

export const SectionPizza: React.FC = () => {
    return (
        <section>
            <Title variant="h1" component="h2" text="Acheter nos pizzas"/>
            <PizzaCard  label="4 frommages"/>
            <PizzaCard  label="Royal"/>
            <PizzaCard  label="Impérial"/>
            <PizzaCard  label="Annanas"/>
            <PizzaCard  label="Pomme miel"/>
        </section>
    )
}