import '../styles/Body.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

const Body = () => {
  return (
    <div className='main-body'>
        <Navbar />
        <Home />
        <Footer />
    </div>
  );
}

export default Body;