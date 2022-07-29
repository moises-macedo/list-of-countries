import { AnimatePresence } from "framer-motion";
import { Route, Routes as PageRoutes, useLocation } from "react-router-dom"
import Continents from "../../Pages/Continents"
import Home from "../../Pages/Home";


const Animated = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <PageRoutes location={location} key={location.pathname}>
                <Route exact path={"/"} element={<Home />} />
                <Route exact path={"/continents"} element={<Continents />} />
            </PageRoutes>
        </AnimatePresence>
    )
}
export default Animated