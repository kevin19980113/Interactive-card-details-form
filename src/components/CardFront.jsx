import cardFrontImg from "../assets/bg-card-front.png";
import { CardDetailContext } from "../cardInfoContext/CardDetailContext";
import { useContext } from "react";

export default function CardFront() {
  const cardCtx = useContext(CardDetailContext);

  return (
    <div className="cardFrontImg">
      <img src={cardFrontImg} alt="card-front" />
      <div className="cardMark">
        <div className="firstCircle"></div>
        <div className="secondCircle"></div>
      </div>
      <h3 className="cardNumber">
        {cardCtx.cardDetail.cardNumber
          ? cardCtx.cardDetail.cardNumber
          : "0000 0000 0000 0000"}
      </h3>
      <p className="cardHolder">
        {cardCtx.cardDetail.cardholderName
          ? cardCtx.cardDetail.cardholderName
          : "KEVIN LEE"}
      </p>
      <p className="expDate">
        {cardCtx.cardDetail.expMM ? cardCtx.cardDetail.expMM : "00"} /{" "}
        {cardCtx.cardDetail.expYY ? cardCtx.cardDetail.expYY : "00"}
      </p>
    </div>
  );
}
