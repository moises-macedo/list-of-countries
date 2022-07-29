import "../../Assets/Styles/Css/header.css";
import { motion } from "framer-motion"


const Header = () => {
    return (
        <motion.header className="container--header"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
            >
            <h1>List of Countries</h1>
        </motion.header>
    )

}
export default Header