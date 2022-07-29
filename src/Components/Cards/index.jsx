import { useContext, useEffect, useState } from "react";
import { CatologueContext } from "../../Provider/Catologue";
import "../../Assets/Styles/Css/cards.css"
import BtnLoadCard from "../BtnLoadCard";
import {motion} from "framer-motion"

const Card = () => {
    const { card } = useContext(CatologueContext);
    const [cardsPerPage, setCardPerPage] = useState([]);

    useEffect(() => {
        if (card.length > 0) {

            setCardPerPage(card.slice(0, 10))
        }
    }, [card])

    const LoadMoreCard = () => {
        setCardPerPage(card.slice(cardsPerPage, 5 + cardsPerPage.length))

    }


    return (
        <motion.div className="container--cards"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
            >
            {
                cardsPerPage.map((el, index) => {
                    const { name, capital, languages, emoji, currency } = el;

                    return (
                        <ul key={index} className="cards-unitary">
                            <li className="unitary unitary-country">
                                <span>País</span>
                                <p>{name}</p>
                            </li>
                            <li className="unitary">
                                <span>Capital</span>
                                <p>{capital}</p>
                            </li>
                            <li className="unitary">
                                <span>Idioma</span>
                                <p>{languages.map(item => item.name)}</p>
                            </li>
                            <li className="unitary">
                                <span>Moeda</span>
                                <p>{currency}</p>
                            </li>
                            <li className="unitary unitary-flags">
                                <span>Bandeira</span>
                                <p>{emoji}</p>
                            </li>

                        </ul>
                    )
                })
            }
            {/* <button onClick={() => setCardPerPage(card.slice(cardsPerPage, cardsPerPage.length - 5))}>
                voltar</button> */}

            <BtnLoadCard onClick={LoadMoreCard} />
        </motion.div >
    );
}
export default Card