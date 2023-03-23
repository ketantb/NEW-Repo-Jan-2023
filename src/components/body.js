import "./styles/body.css"
import featureIcon1 from "./assets/feature-image-1.svg"
import featureIcon2 from "./assets/feature-image-2.svg"
import featureIcon3 from "./assets/feature-image-3.svg"
import bookAnimation from "./assets/Book_Animation.gif"
import Slider from "./slider"

const Main = () => {
    return (
        <>
            <div className="body-container">
                <section class="body-lb">
                    <div>
                        Publishing your book has never been easier
                    </div>
                    <div>Everything you need, 100% free.</div>
                    <div className="feature-icons-block">
                        <div>
                            <p><img className="f-icon-1" src={featureIcon1} alt="" /></p>
                            <p>No Hidden Costs</p>
                        </div>
                        <div>
                            <p><img className="f-icon-2" src={featureIcon2} alt="" /> </p>
                            <p>Sell Worldwide</p>
                        </div>
                        <div>
                            <p><img className="f-icon-3" src={featureIcon3} alt="" /></p>
                            <p>Distribute in eBook and Paperback</p>
                        </div>
                    </div>
                    <div>
                        <button id="get-started-btn">Get Sterted for Free</button>
                    </div>
                    <div></div>
                    <div class="body-slider-block">
                        <p id="sell-at-txt"><span>Sell</span>&nbsp;<span>At</span></p>
                        <Slider />
                    </div>
                </section>
                <section className="body-rb">
                    <img src={bookAnimation} alt='book-animation' />
                </section>
            </div>
        </>
    )
}

export default Main;