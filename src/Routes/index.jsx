import { Route, useLocation, Routes as PageRoutes } from "react-router-dom"
import Animated from "../Components/Animated";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Continents from "../Pages/Continents";
import Home from "../Pages/Home"

const Routes = () => {

    const location = useLocation();


    return (
        <Animated />
    )
}
export default Routes