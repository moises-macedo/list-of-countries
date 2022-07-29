import { useContext, useState } from "react";
import { CatologueContext } from "../../Provider/Catologue";
import InputSearch from "../InputSearch";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import "../../Assets/Styles/Css/modal.css";
import ListSearch from "../ListSearch";
import {motion} from "framer-motion";


const Modal = () => {
    const [card, setCard] = useState([])
    const { modalClose, setModalClose } = useContext(CatologueContext);


    const removeCard = (indexToRemove) => {
        const newCard = card.filter((el, index) => {
            return index !== indexToRemove
        });
        setCard(newCard);
    };

    const handleClick = () => {
        document.querySelector("body").style.overflow = "auto";
        setModalClose(!modalClose)
    };


    const newCard = [...new Set(card)];
    const cardSlice = newCard.slice(0, 5);

    return (
        <>
            {modalClose ? (
                <motion.section className="container--modal-search"
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                    <div className="modal--search">

                        <div className="modal--search-btnClose">
                            <button onClick={handleClick}>
                                <p><AiOutlineCloseCircle /></p>
                            </button>
                        </div>
                        <InputSearch card={card} setCard={setCard} />
                        {cardSlice.length > 0 ? (
                            <ListSearch card={cardSlice} onClick={removeCard} />
                        ) : (
                            <div className="modal--info-search">
                                <h3>Sem pesquisa para mostrar</h3>
                            </div>
                        )}

                    </div>
                </motion.section>
            ) : null}
        </>


    )
}
export default Modal