import '../styles/Footer.scss';

function Footer() {
    return <>
        <div className="footer">
            <p>All rights reserved© masumahmed.net {new Date().getFullYear()}</p>
            <div className='links'>
                <a href="https://github.com/masumahmed" target='__blank'>github</a>
                <a href="https://codepen.io/masumahmed" target='__blank'>codepen</a>
                <a href="https://leetcode.com/u/masumahmed/" target='__blank'>leetcode</a>
                <a href='https://www.hackerrank.com/masumahmed' target='__blank'>hankerrank</a>
                <a href="https://linkedin.com/in/masum-ahmed" target='__blank'>linkedin</a>
                <a href="https://masumahmed.net/resume" target='__blank'>resume</a>
            </div>
            <p>Made with 💜 and React by Masum Ahmed</p>
        </div>
    </>
}

export default Footer;