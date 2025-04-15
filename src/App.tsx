import BestSeller from "./sections/best-seller/BestSeller";
import Care from "./sections/care/Care";
import Hero from "./sections/hero/Hero";
import Referance from "./sections/referance/Referance";
import Service from "./sections/service/Service";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <Hero/>
      <main>
        <Service className="app__sevice"></Service>
        <BestSeller className="app__best-seller"></BestSeller>
        <Referance className="app__referance"></Referance>
        <Care className="app__care"></Care>
      </main>
      <Footer className="app__footer"></Footer>
    </>
  );
}

export default App;
