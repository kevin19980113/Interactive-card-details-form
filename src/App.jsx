import bgImg from "./assets/bg-main-desktop.png";
import CardDetailForm from "./components/CardDetailForm";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import CardDetailContextProvider from "./cardInfoContext/CardDetailContext.jsx";

function App() {
  return (
    <main>
      <CardDetailContextProvider>
        <CardFront />
        <CardBack />
        <img src={bgImg} className="backgroundImg" alt="background image" />
        <div className="CardDetailWrapper">
          <CardDetailForm />
        </div>
      </CardDetailContextProvider>
    </main>
  );
}

export default App;
