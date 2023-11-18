import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import PostsPage from './PostsPage';
import CardsPage from './CardsPage';
import Home from './HomePage';

import headerImage from './images/AI_elder.png';

function App() {
  return (
    <Router>
      <div>
      <header className="fixed inset-x-0 top-0 z-10 bg-black bg-opacity-75 text-cyan-600">
        <nav className="container mx-auto flex items-center justify-between p-4">
          {/* Logo 或品牌名稱 */}
          <div className="font-bold text-xl">
            <Link to="/">Elder Ladder</Link>
          </div>
          
          {/* 導航連結 */}
          <ul className="flex">
            <li className="mx-4">
              <Link to="/Home" className="text-white text-lg">Home</Link>
            </li>
            <li className="mx-4">
              <Link to="/posts" className="text-white text-lg">Posts</Link>
            </li>
            <li className="mx-4">
              <Link to="/cards" className="text-white text-lg">Cards</Link>
            </li>
          </ul>
        </nav>
      </header>

        <div className="pt-16">
        <Routes>
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


