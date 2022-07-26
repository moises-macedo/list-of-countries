import "../../Assets/Styles/Css/preloader.css"
const Preloader = () => {
    return (
        <section className="container--loader">
            <div className="spinner-loader">
            </div>
            <p className="loader-text">Loading...</p>
        </section>
    )
}
export default Preloader