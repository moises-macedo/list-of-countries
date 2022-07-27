import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { useState } from "react";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com/countries'
});

const InputSearch = () => {
    const [name, setName] = useState('')
    const [ card, setCard] = useState([]);

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

    const { data, loading, error } = useQuery(LIST_INPUT, { client });

    

      console.log(data)

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
            <button>Procurar</button>
        </div>

    )
}
export default InputSearch