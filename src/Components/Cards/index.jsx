import { useContext, useEffect, useState } from "react";
import { CatologueContext } from "../../Provider/Catologue";

const Card = () => {
    const { card } = useContext(CatologueContext);


    return (
        <div>
            {
                card.map((el, index) => {
                    const { name, capital, languages, emoji, currency } = el;

                    return (
                        <ul key={index}>
                            <li>
                                <p>País</p>
                                <span>{name}</span>
                            </li>
                            <li>
                                <p>Capital</p>
                                <span>{capital}</span>
                            </li>
                            <li>
                                <p>Idioma</p>
                                <span>{languages.map(item => item.name)}</span>
                            </li>
                            <li>
                                <p>Moeda</p>
                                <span>{currency}</span>
                            </li>
                            <li>                                
                                <p>Bandeira</p>
                                <span>{emoji}</span>
                            </li>
                        </ul>
                    )
                })
            }
        </div >
    );
}
export default Card