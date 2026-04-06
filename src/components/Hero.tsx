import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-layout">
        <div className="hero-copy">
          <h1 className="hero-title">重塑深度睡眠
            <br />回归自然，安享每一个夜晚</h1>
          <p className="hero-subtitle">
            Dreamland 梦想国，为现代人的肩颈与夜晚恢复而设计。
            我们关注的不只是柔软，而是支撑、节律、温度与身体真正放松下来的那一刻。
          </p>
          <div className="hero-actions">
            <button className="btn-primary">探索健康枕</button>
            <button className="btn-text">了解品牌故事 →</button>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
            alt="柔和光线下的高质感卧室与枕头"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
