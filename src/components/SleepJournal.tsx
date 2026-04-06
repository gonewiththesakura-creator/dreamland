import './SleepJournal.css';

const articles = [
  {
    title: '建立稳定入睡仪式，让身体重新学会“该睡了”',
    desc: '从灯光、香氛、温度到枕头支撑，打造让神经系统真正放松下来的夜间流程。',
    tag: '睡眠习惯',
  },
  {
    title: '为什么高质量枕头能改变整晚恢复效率',
    desc: '支撑角度、透气结构与回弹速度，决定你第二天醒来是轻松还是僵硬。',
    tag: '人体工学',
  },
  {
    title: '换季时如何调整寝具系统，减少夜间醒来',
    desc: '从材质到厚度，教你在气候变化中保持稳定、深沉、不过热的睡眠体验。',
    tag: '季节护理',
  },
];

const SleepJournal: React.FC = () => {
  return (
    <section id="health" className="section sleep-journal">
      <div className="container">
        <div className="journal-header">
          <div>
            <h4 className="section-subtitle">睡眠专栏</h4>
            <h2 className="section-title">把恢复力带回生活，
              <br />从每个夜晚开始</h2>
          </div>
          <p>
            Dreamland 不只提供枕头，也持续输出关于睡眠、恢复与日常节律的长期方法。
          </p>
        </div>
        <div className="journal-grid">
          {articles.map((article) => (
            <article key={article.title} className="journal-card">
              <span className="journal-tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.desc}</p>
              <a href="#">继续阅读 →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SleepJournal;
