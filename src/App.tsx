import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ProductShowcase from './components/ProductShowcase';
import SleepJournal from './components/SleepJournal';
import StoreExperience from './components/StoreExperience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandStory />
      <ProductShowcase />
      <SleepJournal />
      <StoreExperience />
      <Footer />
    </div>
  );
}

export default App;
