
function Header() {
    return (
        <header className="header">
            <a className="header__logo" href="#">Psycho<span>Art</span></a>
            <div className="form">
                <button className="form__button"><img src="../imgs/lupa.png" /></button>
                <input className="form__input" type="search" placeholder="Search items and collections" />
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item"><a className="header__link" href="#">Collections</a></li>
                    <li className="header__item"><a className="header__link" href="#">Feature</a></li>
                    <li className="header__item"><a className="header__link" href="#">FAQ</a></li>
                    <li className="header__item"><a className="header__link header__link_gradient " href="#">Select Wallet</a></li>
                </ul>
            </nav>
            <div className="header__btns">
                <button className="header__search">
                    <img src="./imgs/lupa_2.svg" />
                </button>
                <button className="header__menu">
                    <img src="./imgs/menu.png" />
                </button>
            </div>
        </header>
    )
}

export default Header