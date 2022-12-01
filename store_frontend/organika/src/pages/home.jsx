import './home.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <h1>Hello there!</h1>

            <Link className="btn btn-outline-dark" to="/catalog">Checkour amazing catalog</Link>
        </div>
    );
};

export default Home;