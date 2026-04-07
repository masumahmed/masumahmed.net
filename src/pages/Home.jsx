import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Intro from '../data/IntroData.json';

function Home() {
    const [text, setText] = useState("Software Engineer");
    const [speed, setSpeed] = useState(800);

    useEffect(() => {        
        const labels = Intro[0].text.split(' ');
        let index = 0;
        const interval = setInterval(() => {
            setText(labels[index]);
            index = (index + 1) % labels.length;
        }, 1000 - speed);
        return () => clearInterval(interval);
    }, [speed]);

    return <>
        <div id="bodyWrapper">
            <Header />
            <div id="carousel">
                <p id="carouselWord">{text}</p>
            </div>
            <div id="controls-container">
                <div id="controls">
                    <input type="range" id="speed" min="150" max="900" value={speed} onChange={e => setSpeed(e.target.value)} />
                </div>
            </div>
        </div>
        <Footer />
    </>
}

export default Home;
