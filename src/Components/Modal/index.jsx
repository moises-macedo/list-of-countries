import { useContext, useState } from "react";
import { CatologueContext } from "../../Provider/Catologue";
import InputSearch from "../InputSearch";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import "../../Assets/Styles/Css/modal.css";
import ListSearch from "../ListSearch";
import { useEffect } from "react";
import Paginate from "../Paginate";

const Modal = () => {
    const [card, setCard] = useState([])
    const { modalClose, setModalClose } = useContext(CatologueContext);

    

    
    const removeCard = (indexToRemove) => {
        const newCard = card.filter((el, index) => {
            return index !== indexToRemove
        })
        setCard(newCard)
    }
    
    const newCard = [...new Set(card)]; 
        
    return (
        <>
            {modalClose ? (
                <section className="container--modal-search">
                    <div className="modal--search">

                        <div className="modal--search-btnClose">
                            <button onClick={() => setModalClose(!modalClose)}>
                                <p><AiOutlineCloseCircle /></p>
                            </button>
                        </div>
                        <InputSearch card={card} setCard={setCard} />
                        <ListSearch card={newCard} onClick={removeCard}/>                        
                    </div>
                </section>
            ) : null}
        </>


    )
}
export default Modal