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

  


  const listArray = (e) => {
    if (data.country !== null) {
      const newData = data.country;
      setCard([...card, newData]);
    }
    setName("")
  }

  const formSubmit = (e) => {
    e.preventDefault();

  };



  return (
    <div className="container--input-search">
      <form onSubmit={formSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder=" Pesquisar por sigla, exemplo: 'BR'"
          className="input-search"
           />
        <button
          onClick={listArray}
          className="btn-search">
          <p><AiOutlineSearch /></p>
        </button>
      </form>
    </div>

  )
}
export default InputSearch