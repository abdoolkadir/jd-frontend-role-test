import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Portfolio from './pages/portfolio/Portfolio';
import Shop from './pages/shop/Shop';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import About from './pages/about/About';
import Teams from './pages/teams/Teams';
import Service from './pages/service/Service';
import ContactUs from './pages/contact/ContactUs';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/team" element={<Teams />}></Route>
            <Route path="/services" element={<Service />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
