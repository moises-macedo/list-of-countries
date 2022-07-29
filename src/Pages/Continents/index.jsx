import { motion } from "framer-motion"
import SelectContinents from "../../Components/SelectContinents"
const Continents = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <SelectContinents />
        </motion.div>
    )
}
export default Continents