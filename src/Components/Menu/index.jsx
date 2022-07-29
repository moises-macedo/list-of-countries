import InputSearch from "../InputSearch"
import "../../Assets/Styles/Css/menu.css";
import { useContext, useState } from "react";
import { CatologueContext } from "../../Provider/Catologue";
import { useLocation, useNavigate, } from "react-router-dom";
import { motion } from "framer-motion"


const Menu = () => {
    const [status, setStatus] = useState(true);
    const { modalClose, setModalClose } = useContext(CatologueContext);
    const navigate = useNavigate();
    const location = useLocation()
    
    const handleClickSearch = () => {
        document.querySelector("body").style.overflow = "hidden";
        setModalClose(!modalClose);
        navigate("/")
    }

    const hanleClickListAll = () => {
        navigate("/")
    }



    return (
        <motion.nav className="container--menu-nav"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}

        >
            <ul className="menu--nav-list">
                <li className="nav--list-search">
                    <button onClick={handleClickSearch}>
                        <p>Search</p>
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate("/continents")}
                        disabled={location.pathname === "/continents" ? true : false}
                        className={location.pathname === "/continents" ? "disable" : null}
                    >
                        <p>Continents</p>
                    </button>
                </li>
                <li>
                    <button
                        disabled={location.pathname === "/continents" ? false : true}
                        onClick={hanleClickListAll}
                        className={location.pathname !== "/continents" ? "disable" : null}>
                        <p>List all</p>
                    </button>
                </li>
            </ul>
        </motion.nav>
    )
}
export default Menu