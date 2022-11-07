import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <Catalog/>
        <Footer></Footer>
    </div>
  );
}

export default App;
