import { useContext } from "react";
import Card from "../../Components/Cards";
import InputSearch from "../../Components/InputSearch";
import Paginate from "../../Components/Paginate";
import Preloader from "../../Components/Preloader";
import ScrollTop from "../../Components/ScrollTop";
import { CatologueContext } from "../../Provider/Catologue";

const Home = () => {

    const { loading, error } = useContext(CatologueContext);

    
    return (
        <>  {loading || error ? (<Preloader />) : (
            <>
                <InputSearch />
                {/* <Card />
                <ScrollTop /> */}
            </>
        )}
        </>

    )
}
export default Home