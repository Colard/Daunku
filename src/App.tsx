import BestSeller from "./components/best-seller/BestSeller";
import Care from "./components/care/Care";
import Hero from "./components/hero/Hero";
import Referance from "./components/referance/Referance";
import Service from "./components/service/Service";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Hero/>
      <main>
        <Service className="app__sevice"></Service>
        <BestSeller className="app__best-seller"></BestSeller>
        <Referance className="app__referance"></Referance>
        <Care className="app__care"></Care>
        <Footer className="app__footer"></Footer>
      </main>
    </>
  );
}

export default App;
