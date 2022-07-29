import { useContext } from "react";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Preloader from "./Components/Preloader";
import Home from "./Pages/Home";
import { CatologueContext } from "./Provider/Catologue";
import Routes from "./Routes";


function App() {
  const { loading, error } = useContext(CatologueContext);

  return (
    <>  {loading || error ? (<Preloader />) :
      <>
        <Header />
        <Menu />
        <Routes />
      </>
    }
    </>


  );
}

export default App;
