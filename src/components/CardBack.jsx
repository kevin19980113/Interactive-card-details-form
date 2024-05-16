import cardBackImg from "../assets/bg-card-back.png";
import { useContext } from "react";
import { CardDetailContext } from "../cardInfoContext/CardDetailContext";

export default function CardFront() {
  const cardCtx = useContext(CardDetailContext);
  return (
    <div className="cardBackImg">
      <img src={cardBackImg} alt="card-front" />
      <h4 className="cvcNumber">
        {cardCtx.cardDetail.cvc ? cardCtx.cardDetail.cvc : "000"}
      </h4>
    </div>
  );
}
