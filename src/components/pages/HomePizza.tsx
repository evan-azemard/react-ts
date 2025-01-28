import { Title } from "@atoms/index"
import { SectionPizza } from "@organisms/index"

export const HomePizza: React.FC = () => {
    return (
        <>
        <Title variantTypo="h1" componentTypo="h2" text="Bienvenue sur notre pages pizza" color=""/>
        <SectionPizza />
        </>
    )
}