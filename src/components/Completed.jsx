import completedImg from "../assets/icon-complete.svg";
import { useContext } from "react";
import { CardDetailContext } from "../cardInfoContext/CardDetailContext";

export default function Completed() {
  const cardCtx = useContext(CardDetailContext);
  return (
    <div className="completedContainer">
      <img src={completedImg} alt="completed logo" />
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <a href="#">
        <button className="continue" onClick={cardCtx.resetCardDetail}>
          Continue
        </button>
      </a>
    </div>
  );
}
