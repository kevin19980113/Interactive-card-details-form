import { useContext } from "react";
import { CardDetailContext } from "../cardInfoContext/CardDetailContext";

export default function useCardDetailValidation() {
  const cardCtx = useContext(CardDetailContext);
  const { cardholderName, cardNumber, expMM, expYY, cvc } = cardCtx.cardDetail;

  const checkInvalidInput = () => {
    let isInvalid = false;

    if (!/^[a-zA-Z\s]*$/.test(cardholderName)) {
      cardCtx.updateInvalidDetail(
        "cardholderName",
        "CardHolder name can only contain letters and spaces"
      );
      isInvalid = true;
    }
    if (!/^\d*$/.test(cardNumber.replace(/\s/g, ""))) {
      cardCtx.updateInvalidDetail(
        "cardNumber",
        "Card Number can only contain numbers"
      );
      isInvalid = true;
    }

    if (!/^\d*$/.test(expMM)) {
      cardCtx.updateInvalidDetail("expMM", "It can only contain numbers");
      isInvalid = true;
    }

    if (!/^\d*$/.test(expYY)) {
      cardCtx.updateInvalidDetail("expYY", "It can only contain numbers");
      isInvalid = true;
    }

    if (!/^\d*$/.test(cvc)) {
      cardCtx.updateInvalidDetail("cvc", "It can only contain numbers");
      isInvalid = true;
    }
    return isInvalid;
  };

  const checkinsufficientInput = () => {
    let isInvalid = false;
    if (!cardholderName) {
      cardCtx.updateInvalidDetail(
        "cardholderName",
        "CardHolder name is required"
      );
      isInvalid = true;
    }

    if (cardNumber.replace(/\s/g, "").length < 16) {
      cardCtx.updateInvalidDetail(
        "cardNumber",
        "please enter a 16 digits without spaces"
      );
      isInvalid = true;
    }
    if (expMM.length < 2) {
      cardCtx.updateInvalidDetail("expMM", "it should be 2 digits");
      isInvalid = true;
    }
    if (expYY.length < 2) {
      cardCtx.updateInvalidDetail("expYY", "it should be 2 digits");
      isInvalid = true;
    }
    if (cvc.length < 3) {
      cardCtx.updateInvalidDetail("cvc", "it should be 3 digits");
      isInvalid = true;
    }
    return isInvalid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    cardCtx.resetInvalidDetail();
    const isInvalidInput = checkInvalidInput();
    const isInsufficientInput = checkinsufficientInput();

    if (!isInvalidInput && !isInsufficientInput) {
      cardCtx.complete();
    }
  };

  return handleSubmit;
}
