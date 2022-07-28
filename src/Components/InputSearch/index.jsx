import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import "../../Assets/Styles/Css/inputSearch.css";


const InputSearch = ({ card, setCard }) => {

  const [name, setName] = useState('')


  const LIST_INPUT = gql`
  {
    country(code: "${name.toUpperCase()}") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }`
  const { data, loading, error } = useQuery(LIST_INPUT);


  const listArray = (list) => {
    if (data.country !== null) {
      const newData = data.country;
      setCard([...card, newData]);
      
    }
    setName("")
  }


  return (
    <div className="container--input-search">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder=" Pesquisar por sigla exemplo: 'BR'"
        className="input-search" />
      <button
        onClick={listArray}
        className="btn-search">
        <p><AiOutlineSearch /></p>
      </button>
    </div>

  )
}
export default InputSearch