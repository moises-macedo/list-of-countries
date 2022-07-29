import"../../Assets/Styles/Css/listContinent.css";
const ListContinent = ({card}) => {
    return (
        <div className="container--list-continent">
            {card.map((el, index) => {
                const { name, code, emoji } = el
                return (
                    <ul key={index}
                    className="list-continent">
                        <li className="list-continent-unitary">
                            <span>Capital</span>
                            <p>{name}</p>
                        </li>
                        <li className="unitary">
                            <span>Sigla</span>
                            <p>{code}</p>
                        </li>
                        <li className="unitary">
                            <span>Bandeira</span>
                            <p>{emoji}</p>
                        </li>
                    </ul>
                )
            })}
        </div>

    )
}
export default ListContinent