import { useContext } from "react";
import Card from "../../Components/Cards";
import Paginate from "../../Components/Paginate";
import Preloader from "../../Components/Preloader";
import { CatologueContext } from "../../Provider/Catologue";

const Home = () => {

    const { loading, error } = useContext(CatologueContext);

    if (loading || error) {
        return <>{error ? error.message : <Preloader />}</>;
    }
    return (
        <>
            <Card />
            {/* <Paginate/> */}
        </>

    )
}
export default Home