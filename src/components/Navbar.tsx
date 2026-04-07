import '../styles/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const handleClick = () => {
        window.scrollTo(0, 0)
    };

    return <>
        <div className='wrapper'>
            <div className="navbar">
                <Link to="/"><FontAwesomeIcon icon={faHouse} onClick={handleClick} /></Link>
                <Link to="/projects"><FontAwesomeIcon icon={faCode} onClick={handleClick} /></Link>
                <Link to="/blog"><FontAwesomeIcon icon={faBook} onClick={handleClick} /></Link>
                {/* <Link to="/photos"><FontAwesomeIcon icon={faImage} onClick={handleClick}/></Link> */}
                <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} onClick={handleClick} /></Link>
            </div>
        </div>
    </>
}

export default Navbar;