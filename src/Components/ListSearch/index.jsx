import "../../Assets/Styles/Css/listSearch.css";
import { BsFillTrashFill } from 'react-icons/bs';

const ListSearch = ({ card,onClick }) => {
    
    return (
        <section className="container--listSearch">
            {card.map((el, index) => {
                const { capital, name, emoji } = el
                return (
                    <div className="cards--search" key={index}>
                        <ul  className="cards--unitary-search">
                            <li className="unitary-search">
                                <span>Capital</span>
                                <p>{capital}</p>
                            </li >
                            <li className="unitary-search">
                                <span>País</span>
                                <p>{name}</p>
                            </li>
                            <li className="unitary-search">
                                <span>Bandeira</span>
                                <p>{emoji}</p>
                            </li>
                        </ul>
                            <button 
                            className="search--btn-delete"
                            onClick={()=>onClick(index)}>
                                <p><BsFillTrashFill /></p>
                            </button>
                    </div>
                )
            })}


        </section>
    )
}

export default ListSearch