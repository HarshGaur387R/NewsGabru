import './App.css';
import './util.css';
import NewsHomePage from './components/NewsHomePage.mjs';
import Navbar from './items/Navbar.mjs';
import NavbarOptions from './items/NavbarOptions.mjs';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <NavbarOptions></NavbarOptions>
      <NewsHomePage></NewsHomePage>
    </div>
  );
}

export default App;
