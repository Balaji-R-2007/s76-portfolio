import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import IA from "./pages/inovation_atlas.jsx";
import Mv from "./pages/memory_valut.jsx";
import Blog from './pages/blog.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inovation_atlas" element={<IA />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/memory_valut" element={<Mv />} />

      </Routes>
      </BrowserRouter>
  );
};

export default App;