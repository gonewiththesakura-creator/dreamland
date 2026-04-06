import './BrandStory.css';

const BrandStory: React.FC = () => {
  return (
    <section id="story" className="section brand-story">
      <div className="container story-shell">
        <div className="story-copy">
          <h4 className="section-subtitle">我们的哲学</h4>
          <h2 className="section-title">
            不是制造一只枕头，
            <br />而是重新理解一夜恢复的价值
          </h2>
          <div className="story-text">
            <p>
              Dreamland 梦想国起源于一个很朴素的问题：为什么很多人明明睡了足够长的时间，第二天醒来却依旧沉重、僵硬、没有恢复感。
              我们后来逐渐意识到，问题往往不只是“睡多久”，而是身体在这一夜里，是否真正获得了合适的支撑、稳定的温度感，以及足够不被打断的节律。
            </p>
            <p>
              过去十年，我们把注意力长期放在人体工程学、材料实验和真实日常反馈上，希望把“好睡”从一种抽象感受，变成可以被理解、被验证、被长期复现的体验。
              Dreamland 品牌主营国内外顶级安睡枕，公司具备实验室研发与工厂设计能力，只为持续打磨真正适合现代人生活方式的深睡产品。
            </p>
            <p>
              我们不把睡眠当成短期被营销包装的概念，而把它看成恢复身体、安顿情绪、重新回到生活秩序里的基础能力。
              梦想国想做的正是这样一件事：用尽可能克制、诚实、长期主义的方法，陪你一起踏入甜梦之境。
            </p>
          </div>
          <div className="story-signoff">
            <span>梦想国</span>
            <small>与您一起踏入甜梦之境</small>
          </div>
        </div>

        <div className="story-visual">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
            alt="柔和晨光中的卧室与枕头细节"
            className="story-image"
          />
          <div className="story-note">
            <p>
              “亲爱的梦想国家人，感谢您光临本店。Dreamland 长期专注于深睡眠与人体工程学设计，希望把真正有效的睡眠支撑体验带给更多人。”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
