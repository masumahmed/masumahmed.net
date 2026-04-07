import '../styles/Banner.scss'
import quotes from '../data/Quotes.json'

function Banner() {
    const getTodayQuote = () => {
        const today = new Date().toISOString().slice(5, 10); // "MM-DD"
        return quotes.find(entry => entry.date === today);
    }

    const todayQuote = getTodayQuote();

    return <>
        <div className="banner">
            <div className='world'>
                <h2>{todayQuote?.text}</h2>
            </div>
        </div>
    </>
}

export default Banner;