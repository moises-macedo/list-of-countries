import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ListContinent from "../ListContinent";
import "../../Assets/Styles/Css/selectContinents.css"


const SelectContinents = () => {
    const [continents, setContinents] = useState([]);
    const [coutries, setCoutries] = useState();
    const [resultCoutries, setResultCoutris] = useState();

    const LIST_CONTINENTS = gql`
    
    query{
        continents{
          name
          code
        }
        continent(code:"${coutries}"){
          countries{
            name
      code
      capital
      emoji
      languages {
        code
        name
      }
            
          
          }
          
        }
      }`
    const { data, loading, error } = useQuery(LIST_CONTINENTS);




    const loadContinents = () => {
        if (data !== undefined) {
            setContinents(data.continents)
            setResultCoutris(data.continent?.countries)
        }

    }

    useEffect(() => {
        loadContinents()
    }, [data])

    if (loading || error) {
        return;
    }

    return (
        <div>
            <div className="container--select-continents">

                <select
                    onChange={e => setCoutries(e.target.value)}
                    value={coutries}
                    multiple={false}
                    className="select-continents"
                >
                    <option hidden >Selecione o Continente</option>
                    {continents.map((el, index) => {
                        const { code, name } = el
                        return (
                            <option value={code} key={index}>{name}</option>
                        )
                    })}

                </select>
                <div className="qtd-continents">
                    {resultCoutries !== undefined ? (
                        <>
                            <span>Qtd.</span>
                            <p> {resultCoutries.length}</p>
                        </>
                    ) : null}
                </div>
            </div>

            <div>
                {resultCoutries === undefined ?
                    null :
                    (
                        <ListContinent card={resultCoutries} />
                    )
                }
            </div>
        </div>
    )
}
export default SelectContinents