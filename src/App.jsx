import bgImg from "./assets/bg-main-desktop.png";
import mobileImg from "./assets/bg-main-mobile.png";
import CardDetailForm from "./components/CardDetailForm";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import CardDetailContextProvider from "./cardInfoContext/CardDetailContext.jsx";
import { useMediaQuery } from "react-responsive";

function App() {
  const isDesktop = useMediaQuery({ minWidth: "1024px" });

  return (
    <main>
      <CardDetailContextProvider>
        <CardFront />
        <CardBack />
        <img
          src={isDesktop ? bgImg : mobileImg}
          className="backgroundImg"
          alt="background image"
        />
        <div className="CardDetailWrapper">
          <CardDetailForm />
        </div>
      </CardDetailContextProvider>
    </main>
  );
}

export default App;
