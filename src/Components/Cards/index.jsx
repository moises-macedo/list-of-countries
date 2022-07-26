import { useContext, useEffect, useState } from "react";
import { CatologueContext } from "../../Provider/Catologue";
import "../../Assets/Styles/Css/cards.css"

const Card = () => {
    const { card } = useContext(CatologueContext);
    const [cardsPerPage, setCardPerPage] = useState([]);

    useEffect(() => {
        if (card.length > 0) {

            setCardPerPage(card.slice(0, 10))
        }
    }, [card])
    
    return (
        <div className="container--cards">
            {
                cardsPerPage.map((el, index) => {
                    const { name, capital, languages, emoji, currency } = el;

                    return (
                        <ul key={index} className="cards-unitary">
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
            <button onClick={() => setCardPerPage(card.slice(cardsPerPage, cardsPerPage.length - 5))}>
                 voltar</button>
            <button onClick={() => setCardPerPage(card.slice(cardsPerPage, 5 + cardsPerPage.length))}>
                 Proximo</button>
        </div >
    );
}
export default Card