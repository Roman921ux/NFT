
function Header() {
  return (
   <header className="header">
        <a className="header__logo" href="#">Psycho<span>Art</span></a>
        <div className="form">
            <button className="form__button"><img src="../imgs/lupa.png"/></button>
            <input className="form__input" type="search" placeholder="Search items and collections"/>
        </div>
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item"><a className="header__link" href="#">Collections</a></li>
                <li className="header__item"><a className="header__link" href="#">Feature</a></li>
                <li className="header__item"><a className="header__link" href="#">FAQ</a></li>
                <li className="header__item"><a className="header__link header__link_gradient " href="#">Select Wallet</a></li>
            </ul>
        </nav>
   </header>
  )
}

export default Header