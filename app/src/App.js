import './App.css';
import './util.css';
import NewsHomePage from './components/NewsHomePage.mjs';
import Navbar from './items/Navbar.mjs';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <NewsHomePage></NewsHomePage>
    </div>
  );
}

export default App;
