import '../styles/Photos.scss';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Photos() {
    return <>
        <Navbar />
        <Header 
            title={"Photos 👁️"}
            subtitle={"I post pictures I've taken here."}
            desc={"My favorite tech stack includes but not limited to: fullstack, frontend, ui/ux, react, node, django, sqlite, postgresql, mongodb"}
        />
        <div className="photos">
            
        </div>
        <Footer />
    </>
}

export default Photos;