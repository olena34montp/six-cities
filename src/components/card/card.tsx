import { Link } from "react-router-dom";
import { OfferType } from "../../types/offer";
import { useState } from "react";

type CardProps = {
    offer: OfferType;
}

function Card({ offer }: CardProps): JSX.Element {
    const [activeCard, setActiveCard] = useState(offer);

    function handleMouseOver() {
        setActiveCard(offer);
    }

    return (
        <article onMouseOver={handleMouseOver} className="cities__place-card place-card">
            {offer.isPremium &&
                (<div className="place-card__mark">
                    <span>Premium</span>
                </div>)}
            <div className="cities__image-wrapper place-card__image-wrapper">
                <Link to={`/offer/${activeCard.id}`}>
                    <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt={offer.title} />
                </Link>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{offer.price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">In bookmarks</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{ width: "80%" }}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <Link to={`/offer/${activeCard.id}`}>{offer.title}</Link>
                </h2>
                <p className="place-card__type">{offer.type}</p>
            </div>
        </article>
    );
}

export default Card;