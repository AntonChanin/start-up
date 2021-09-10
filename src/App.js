import './App.css';
import Baner from './component/baner/baner';
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
    </div>
  );
}

export default App;
