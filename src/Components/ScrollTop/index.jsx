import { useState } from 'react';
import { BsFillArrowUpSquareFill} from 'react-icons/bs';
import "../../Assets/Styles/Css/scrollTop.css";
const ScrollTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'            
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <button onClick={scrollToTop} className="btn--scrollTop">
            <p>
                <BsFillArrowUpSquareFill style={{ display: visible ? 'inline' : 'none' }} />
            </p>
        </button>
    )

}
export default ScrollTop