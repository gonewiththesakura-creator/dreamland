import './ScienceIntro.css';

const points = [
  {
    title: '深睡眠不是越久越好，而是要稳定进入',
    desc: '人体真正的恢复往往发生在深睡与 REM 睡眠的节律切换中，稳定入睡与减少夜间醒来，比单纯延长卧床时间更关键。',
  },
  {
    title: '枕头的作用不是“软”，而是让颈椎回到中立位',
    desc: '仰卧、侧卧、肩宽、床垫软硬度都会影响枕头高度和支撑方式。真正舒适的枕头，核心在于让头颈肩形成自然连续的支撑。',
  },
  {
    title: '温度、光线和压力感，是最容易被忽视的三件事',
    desc: '卧室过热、睡前高亮屏幕以及持续的肌肉紧张，都会让身体难以进入真正放松的睡眠状态。',
  },
];

const ScienceIntro: React.FC = () => {
  return (
    <section className="section science-intro">
      <div className="container">
        <div className="science-header text-center">
          <h4 className="section-subtitle">睡眠科学</h4>
          <h2 className="section-title">关于“睡好”这件事，
            <br />我们更相信长期有效的方法</h2>
          <p>
            Dreamland 希望把复杂的睡眠知识，转化成普通人也能用得上的日常判断。
          </p>
        </div>
        <div className="science-grid">
          {points.map((point) => (
            <article className="science-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceIntro;
