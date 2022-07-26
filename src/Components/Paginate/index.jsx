
import ReactPaginate from "react-paginate";
import { useContext, useEffect, useState } from "react";
import { CatologueContext } from "../../Provider/Catologue";

const Paginate = () => {
    const { card } = useContext(CatologueContext);
    const [cardsPerPage, setCardPerPage] = useState([]);
    const [pagNumber, setPagNumber] = useState(0);

    const listPerPage = 10;
    const pagesVisited = pagNumber * listPerPage;


    const displayCard = cardsPerPage.slice(pagesVisited, pagesVisited + listPerPage)
        .map((el, index) => {
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
        });
    const pageCounter = Math.ceil(card.length / listPerPage);

    const changePage = ({ select }) => {
        setPagNumber(select)
    };

    useEffect(() => {
        if(card.length > 0){

            setCardPerPage(card.slice(0, 250))
        }
    }, [card])

    console.log(cardsPerPage)

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