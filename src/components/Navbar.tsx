import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#">Dreamland</a>
        </div>
        <nav className="nav-links">
          <a href="#hero">首页</a>
          <a href="#story">品牌故事</a>
          <a href="#products">明星产品</a>
          <a href="#health">睡眠专栏</a>
        </nav>
        <div className="nav-actions">
          <button className="btn-outline">商店</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;