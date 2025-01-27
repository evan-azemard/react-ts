import { useState } from "react";

interface IGreeting {
    name: string;
    age: number;
}

export const Greeting: React.FC<IGreeting> = ({ age, name }) => {
    if (age < 18) {
        return <p>Trop petit</p>;
    } else if (age > 48) {
        return <p>Trop vieux</p>;
    }

    return (
        <div>
            <p>Bonjour, {name} !</p>
            <p>Vous avez {age} ans.</p>
        </div>
    );
};
