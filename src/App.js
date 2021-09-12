import './App.css';
import './assets/fonts/geometria/stylesheetFonts.css';
import About from './component/about/about';
import Baner from './component/baner/baner';
import Benefit from './component/benefits/benefits';
import Contacts from './component/contacts/contacts';
import Footer from './component/footer/footer';
import GeologyInfo from './component/geologyInfo/geologyInfo';
import Header from './component/header/header';
import Portfolio from './component/portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Baner />
      <GeologyInfo />
      <Portfolio />
      <Benefit />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
