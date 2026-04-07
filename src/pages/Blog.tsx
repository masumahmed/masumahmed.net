import BlogData from '../data/BlogData.json';
import BlogPreview from '../components/BlogPreview';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Foooter from '../components/Footer';

import { motion } from "framer-motion";

function Blog() {
    return <>
        <Navbar />
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }} // slide down on exit
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <Header
                title={"Blog ♟️"}
                subtitle={"I post my blogs here mainly about data structures, algorithms, niche things I’ve learned and AI"}
                desc={"My favorite tech stack includes but not limited to: fullstack, frontend, ui/ux, react, node, django, sqlite, postgresql, mongodb"}
            />
            {BlogData.map(entry => {
                return <BlogPreview key={entry.title} props={entry} />
            })}
            <Foooter />
        </motion.div>
    </>
}

export default Blog;