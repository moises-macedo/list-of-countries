
import ReactPaginate from "react-paginate";
import { useContext, useEffect, useState } from "react";
import { CatologueContext } from "../../Provider/Catologue";
import ListSearch from "../ListSearch";

const Paginate = ({ card, onClick  }) => {

    const [cardsPerPage, setCardPerPage] = useState(card.slice(0, 20));
    const [pagNumber, setPagNumber] = useState(0);

    const listPerPage = 5;
    const pagesVisited = pagNumber * listPerPage;


    const displayCard = cardsPerPage.slice(pagesVisited, pagesVisited + listPerPage)
        .map((el, index) => {
            
            return (
                <ListSearch card={el} onClick={onClick} key={index} index={index}/>
            )
        });
    const pageCounter = Math.ceil(card.length / listPerPage);

    const changePage = ({ select }) => {
        setPagNumber(select)
    };

    useEffect(() => {
        if (card.length > 0) {

            setCardPerPage(card.slice(0, 250))
        }
    }, [card])

    
    return (
        <div>
            {displayCard}
            <ReactPaginate
                previousLabel={"Voltar"}
                nextLabel={"Proximo"}
                pageCount={pageCounter}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationAticve"}
            />
        </div>

    )
}
export default Paginate