import Input from "../UI/Input.jsx";
import { useRef, useContext } from "react";
import { CardDetailContext } from "../cardInfoContext/CardDetailContext.jsx";
import useCardDetailValidation from "../Hooks/useCardDetailValidation.jsx";
import InvalidInput from "../UI/InvalidInput.jsx";
import Completed from "./Completed.jsx";

export default function CardDetailForm() {
  const cardholderNameRef = useRef();
  const cardNumberRef = useRef();
  const expMMRef = useRef();
  const expYYRef = useRef();
  const cvcRef = useRef();

  const cardCtx = useContext(CardDetailContext);
  const handleSubmit = useCardDetailValidation();

  function changeHandle(event, identifier) {
    let newValue = event.target.value;

    if (identifier === "cardNumber" && event.target.value.length >= 1) {
      const cardNumberParts = newValue.match(/.{1,4}/g);
      const updatedCardNumber = cardNumberParts.join(" ");
      newValue = updatedCardNumber;
    }

    cardCtx.updateCardDetail(identifier, newValue);
  }

  if (!cardCtx.completed) {
    return (
      <form className="cardDetailForm" onSubmit={handleSubmit}>
        <Input
          label="CARDHOLDER NAME"
          placeHolder="e.g. KEVIN LEE"
          labelClassName="cardInfoLabel"
          inputClassName={`cardInfoInput ${
            cardCtx.invalidDetail.cardholderName ? "errorBorder" : ""
          }`}
          ref={cardholderNameRef}
          onChange={(event) => changeHandle(event, "cardholderName")}
        />
        {cardCtx.invalidDetail.cardholderName && (
          <InvalidInput message={cardCtx.invalidDetail.cardholderName} />
        )}

        <Input
          label="CARD NUMBER"
          placeHolder="1234 5678 9012 3456"
          labelClassName="cardInfoLabel"
          inputClassName={`cardInfoInput ${
            cardCtx.invalidDetail.cardNumber ? "errorBorder" : ""
          }`}
          ref={cardNumberRef}
          onChange={(event) => changeHandle(event, "cardNumber")}
          maxLength={16}
        />
        {cardCtx.invalidDetail.cardNumber && (
          <InvalidInput message={cardCtx.invalidDetail.cardNumber} />
        )}

        <div className="expCvcContainer">
          <div className="expContainer">
            <label className="cardInfoLabel">EXP. DATE (MM/YY)</label>
            <div className="expInputContainer">
              <div className="expInput">
                <input
                  className={`cardInfoInput ${
                    cardCtx.invalidDetail.expMM ? "errorBorder" : ""
                  }`}
                  placeholder="MM"
                  ref={expMMRef}
                  onChange={(event) => changeHandle(event, "expMM")}
                  maxLength={2}
                />
                {cardCtx.invalidDetail.expMM && (
                  <InvalidInput message={cardCtx.invalidDetail.expMM} />
                )}
              </div>

              <div className="expInput">
                <input
                  className={`cardInfoInput ${
                    cardCtx.invalidDetail.expYY ? "errorBorder" : ""
                  }`}
                  placeholder="YY"
                  ref={expYYRef}
                  onChange={(event) => changeHandle(event, "expYY")}
                  maxLength={2}
                />
                {cardCtx.invalidDetail.expYY && (
                  <InvalidInput message={cardCtx.invalidDetail.expYY} />
                )}
              </div>
            </div>
          </div>

          <div className="cvcContainer">
            <Input
              label="CVC"
              placeHolder="e.g. 123"
              labelClassName="cardInfoLabel"
              inputClassName={`cardInfoInput ${
                cardCtx.invalidDetail.cvc ? "errorBorder" : ""
              }`}
              ref={cvcRef}
              onChange={(event) => changeHandle(event, "cvc")}
              maxLength={3}
            />
            {cardCtx.invalidDetail.cvc && (
              <InvalidInput message={cardCtx.invalidDetail.cvc} />
            )}
          </div>
        </div>
        <button className="confirm">Confirm</button>
      </form>
    );
  }

  return <Completed />;
}
