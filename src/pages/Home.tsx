import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Header from '../components/Header'
import Footer from '../components/Footer';
import pfp from '../assets/pfp.jpg'

import { motion } from "framer-motion";

function Home() {
    return <>
        <Navbar />
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }} // slide down on exit
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <Header
                title={"Hi, I’m Masum Ahmed 🪬"}
                subtitle={"Software Engineer & UI/UX Specialist"}
                desc={"check out my projects, blog and photos, stay a while and get in contact with me if you want ..."}
                img={pfp}
                flags={"🇺🇸 🇧🇩"}
            />
            <Banner />
            <Footer />
        </motion.div>
    </>
}

export default Home;