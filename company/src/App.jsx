import Hero from "./components/Hero";
import TeamSection from "./components/Team";
import Statistic from "./components/Statistic";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <Statistic />
      <Features />
      <TeamSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
