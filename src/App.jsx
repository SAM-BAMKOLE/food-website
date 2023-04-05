import reactLogo from "./assets/logo.png";
import Navbar from "./components/navbar-component/Navbar";
import Header from "./components/header-component/Header";
import "./App.css";
import Order from "./components/order-component/Order";
import About from "./components/about-component/about";
import Features from "./components/features-component/Features";
import Recommendation from "./components/recommendation-component/Recommendation";
import Locations from "./components/locations-component/Locations";
import GetApp from "./components/getApp-component/GetApp";
import Footer from "./components/footer-component/Footer";

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <Header />
            <Order />
            <About />
            <Features />
            <Recommendation />
            <Locations />
            <GetApp />
            <Footer />
        </div>
    );
};

export default App;
