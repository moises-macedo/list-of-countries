import { useContext } from "react";
import Card from "../../Components/Cards";
import Header from "../../Components/Header";
import InputSearch from "../../Components/InputSearch";
import Menu from "../../Components/Menu";
import Modal from "../../Components/Modal";
import Paginate from "../../Components/Paginate";
import Preloader from "../../Components/Preloader";
import ScrollTop from "../../Components/ScrollTop";
import { CatologueContext } from "../../Provider/Catologue";

const Home = () => {

    const { loading, error } = useContext(CatologueContext);


    return (
        <>  {loading || error ? (<Preloader />) : (
            <>        
                    
                <Modal />
                <Card />
                <ScrollTop />
            </>
        )}
        </>

    )
}
export default Home