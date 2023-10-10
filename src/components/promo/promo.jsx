import "./promo.css"
import promoImage from "./../../img/images/header-img.jpg"
const Promo = () => {
    return ( <section className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">CHOOSE YOUR NEW CLOTHES</div>
                    <div className="promo__desc">Live your best life</div>
                    <div className="promo__btn"><a href="#!" className="promo__btn"> Shop Now </a></div>
                    </div>
                    </div>
                <div className="promo__image"><img src={promoImage} alt = "promo"/></div>
                </div>
    </section> );
}
 
export default Promo;