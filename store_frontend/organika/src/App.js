import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Footer from './components/footer';

function App() {
  return (
    <div>
        <NavBar></NavBar>
        <SideBar></SideBar>
        <Footer></Footer>
        <h1>Hello world</h1>  
    </div>
  );
}

export default App;
