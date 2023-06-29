import './App.css';
import './util.css';
import NewsHomePage from './components/NewsHomePage.mjs';
import Navbar from './items/Navbar.mjs';
import NavbarOptions from './items/NavbarOptions.mjs';
import Profilebar from './items/Profilebar.mjs';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Profilebar></Profilebar>
      <NavbarOptions></NavbarOptions>
      <NewsHomePage></NewsHomePage>
    </div>
  );
}

export default App;
