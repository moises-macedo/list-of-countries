import"../../Assets/Styles/Css/buttonLoadCard.css";

const BtnLoadCard = ({ onClick }) => {
    return (
        <div className="container--btnLoadCard">
            <button onClick={onClick}>
                <p>carregar mais</p>
            </button>
        </div>
    )
}
export default BtnLoadCard