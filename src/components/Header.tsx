import '../styles/Header.scss'

function Header({ title, subtitle, desc, img, flags }: any) {
    return <>
        <div className="header">
            <div className="left">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{desc}</p>
            </div>
            <div className='right'>
                <img src={img} />
                <h2>{flags}</h2>
            </div>
        </div>
    </>
}

export default Header;