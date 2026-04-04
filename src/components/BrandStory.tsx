import './BrandStory.css';

const BrandStory: React.FC = () => {
  return (
    <section id="story" className="section brand-story">
      <div className="container story-container">
        <div className="story-image-wrapper">
          <div className="story-image-placeholder">
            <div className="abstract-shape"></div>
          </div>
        </div>
        <div className="story-content">
          <h4 className="section-subtitle">我们的哲学</h4>
          <h2 className="section-title">遵循自然节律，<br/>唤醒内在生命力</h2>
          <p>
            在快节奏的现代生活中，优质的睡眠成为一种奢侈。Dreamland 梦想国坚信，真正的疗愈源于自然。
          </p>
          <p>
            我们遍寻全球最优质的天然材质，结合顶尖的人体工学研究，只为打造最契合您颈椎曲线的健康枕。在这里，每一次入睡，都是一次回归大自然的深呼吸。
          </p>
          <button className="btn-outline mt-4">阅读完整故事</button>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;