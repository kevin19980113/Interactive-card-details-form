/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CardDetailContext = createContext({
  cardDetail: {},
  invalidDetail: {},
  completed: false,
  updateCardDetail: () => {},
  updateInvalidDetail: () => {},
  resetInvalidDetail: () => {},
  resetCardDetail: () => {},
  complete: () => {},
});

export default function CardDetailContextProvider({ children }) {
  const [cardDetail, setCardDetail] = useState({
    cardholderName: "",
    cardNumber: "",
    expMM: "",
    expYY: "",
    cvc: "",
  });

  const [invalidDetail, setInvalidDetail] = useState({
    cardholderName: "",
    cardNumber: "",
    expMM: "",
    expYY: "",
    cvc: "",
  });

  const [completed, setCompleted] = useState(false);

  function updateCardDetail(identifier, value) {
    setCardDetail((prevState) => {
      return {
        ...prevState,

        [identifier]: value,
      };
    });
  }

  function updateInvalidDetail(identifier, message) {
    setInvalidDetail((prevState) => {
      return {
        ...prevState,
        [identifier]: message,
      };
    });
  }

  function resetInvalidDetail() {
    setInvalidDetail({
      cardholderName: "",
      cardNumber: "",
      expMM: "",
      expYY: "",
      cvc: "",
    });
  }

  function resetCardDetail() {
    setCardDetail({
      cardholderName: "",
      cardNumber: "",
      expMM: "",
      expYY: "",
      cvc: "",
    });
    setCompleted(false);
  }

  function complete() {
    setCompleted(true);
  }

  const cardDetailContext = {
    cardDetail,
    invalidDetail,
    completed,
    updateCardDetail,
    updateInvalidDetail,
    resetInvalidDetail,
    resetCardDetail,
    complete,
  };

  return (
    <CardDetailContext.Provider value={cardDetailContext}>
      {children}
    </CardDetailContext.Provider>
  );
}
