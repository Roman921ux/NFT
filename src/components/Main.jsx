//import Quistions from "./Quistions"

import Quistions from "./Quistions/Quistions"

function Main() {
    return (
        <div className="container">
            <div className="main">
                <div className="main__text">
                    <h1 className="main__title">Create, Sell & Collect Your Own Creative NFT</h1>
                    <p className="main__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam ducimus nam nemo.
                    </p>
                    <a className="main__btn main__btn_gradient" href="#">Explore Now</a>
                    <a className="main__btn" href="#">Sell NFT</a>
                    <ul className="main__list">
                        <li className="main__item"><span className="main__span">37k+</span>Artworks</li>
                        <li className="main__item"><span className="main__span">20k+</span>Artists</li>
                        <li className="main__item"><span className="main__span">99k+</span>Aucotions</li>
                    </ul>
                </div>
                <div className="main__img">
                    <img src="../imgs/flower_1.png" />
                </div>
            </div>
            <section className="cripta">
                <p className="cripta__icon">BINANCE</p>
                <p className="cripta__icon cripta__icon_ef">ethereum</p>
                <p className="cripta__icon cripta__icon_bl">blockchain</p>
            </section>
            <section className="card">
                <p className="card__title">Featured Artwork</p>
                <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing amet consectetur.</p>
                <div className="card__block">

                    <div className="card__item">
                        <div className="card__cover">
                            <img src="../imgs/flower_1.png" />
                        </div>
                        <div className="card__item_text">
                            <span className="span__left">@Johny<p className="p__left">Yellow Painting</p></span>
                            <span className="span__right">Current Bid<p className="p__right">0.005ETN</p></span>
                        </div>
                        <button className="card__item_btn" href="#">Place a bid</button>
                    </div>

                    <div className="card__item">
                        <div className="card__cover">
                            <img src="../imgs/flower_1.png" />
                        </div>
                        <div className="card__item_text">
                            <span className="span__left">@Johny<p className="p__left">Yellow Painting</p></span>
                            <span className="span__right">Current Bid<p className="p__right">0.005ETN</p></span>
                        </div>
                        <button className="card__item_btn" href="#">Place a bid</button>
                    </div>

                    <div className="card__item">
                        <div className="card__cover">
                            <img src="../imgs/flower_1.png" />
                        </div>
                        <div className="card__item_text">
                            <span className="span__left">@Johny<p className="p__left">Yellow Painting</p></span>
                            <span className="span__right">Current Bid<p className="p__right">0.005ETN</p></span>
                        </div>
                        <button className="card__item_btn" href="#">Place a bid</button>
                    </div>

                </div>
            </section>
            <section className="artworks">
                <p className="artworks__title">Featured Artworks Question</p>
                <p className="artworks__text">Lorem ipsum dolor sitsicing?</p>
                <div className="quistions">
                    <div className="q__column">
                        <Quistions />
                        <Quistions />
                        <Quistions />
                    </div>
                    <div className="q__column">
                        <Quistions />
                        <Quistions />
                        <Quistions />
                    </div>
                </div>
            </section>
            <section className="banner">
                <span className="banner__title">Get ready to collect our NFT</span>
                <a className="banner__link" href="#">Get Started</a>
            </section>
        </div>
    )
}

export default Main