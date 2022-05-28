import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import Portfolio from './pages/portfolio/Portfolio';
import Shop from './pages/shop/Shop';
import Navbar from './components/layout/navbar/Navbar';

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
