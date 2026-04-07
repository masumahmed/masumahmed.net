import { useState } from 'react'

import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import ProjectItem from '../components/ProjectItem';
import ProjectData from '../data/ProjectsData.json';

import { motion } from "framer-motion";

function Project() {
    const [filter, setFilter] = useState("*");

    return <>
        {/* <Modal dependency={{filter}}/> */}
        <Navbar />

        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }} // slide down on exit
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <Header
                title={"Projects 🐙"}
                subtitle={"I made many projects, demos and mvps to learn and demonstrate my skills "}
                desc={"My favorite tech stack includes but not limited to: fullstack, frontend, ui/ux, react, node, django, sqlite, postgresql, mongodb"}
                img={""}
                flags={""}
            />
            <Filter filter={{ filter, setFilter }} />
            <div id="project-wrapper">
                {ProjectData.map((project, index) => {
                    if (filter == "*" || project.tags.includes(filter))
                        return <ProjectItem key={index} project={project} />
                })}
            </div>
            <Footer />
        </motion.div>
    </>
}

export default Project;