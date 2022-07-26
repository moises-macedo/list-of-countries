import { createContext, useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

export const CatologueContext = createContext([]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com/countries'
});

const LIST_COUNTRIES = gql`
{
    countries {
      name
      capital
      code
      currency
      emoji
      emojiU
      languages {
        code
        name
      }
    }
}`

const CatologueProvider = ({ children }) => {
    const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
    const [card, setCard] = useState([]);
    const loadCards = () => {
        setCard(data.countries)
    }

    useEffect(() => {
        if (data !== undefined) {
            loadCards()
        }
    }, [data])    

    return (
        <CatologueContext.Provider value={{ loading, error, card }}>
            {children}
        </CatologueContext.Provider>
    )

}
export default CatologueProvider