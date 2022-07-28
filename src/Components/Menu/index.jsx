import InputSearch from "../InputSearch"
import "../../Assets/Styles/Css/menu.css";
import { useContext, useState } from "react";
import { CatologueContext } from "../../Provider/Catologue";

const Menu = () => {
    const [status, setStatus] = useState(true);
    const { modalClose, setModalClose } = useContext(CatologueContext);
    


    return (
        <nav className="container--menu-nav">
            <ul className="menu--nav-list">
                <li className="nav--list-search">
                    <button onClick={()=> setModalClose(!modalClose)}>
                        <p>Search</p>
                    </button>
                </li>
                <li>
                    <button>
                        <p>Continents</p>
                    </button>
                </li>
                <li>
                    <button
                        disabled={status ? true : false}
                        onClick={() => console.log("oi")}
                        className={status ? "disable" : null}>
                        <p>List all</p>
                    </button>
                </li>
            </ul>
        </nav>
    )
}
export default Menu