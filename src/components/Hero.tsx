import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-content">
        <h1 className="hero-title">重塑深度睡眠<br/>回归自然，安享每一个夜晚</h1>
        <p className="hero-subtitle">
          Dreamland 梦想国，为您打造会呼吸的健康枕。<br/>
          将自然的柔和融入现代人体工学，让每一缕梦境都轻盈安稳。
        </p>
        <div className="hero-actions">
          <button className="btn-primary">探索健康枕</button>
          <button className="btn-text">了解品牌故事 →</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;