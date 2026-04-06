import './SleepJournal.css';

const articles = [
  {
    title: '睡前一小时，为什么比你想象中更重要',
    summary:
      '人类从清醒切换到睡眠，并不是一个瞬间的动作，而是一整套生理信号逐渐接管的过程。睡前一小时如果持续被高亮屏幕、工作决策、强社交和高热量饮食占据，大脑会继续维持在“需要应对外界”的状态。相反，如果在这一小时内逐渐降低环境亮度、减少信息刺激、把室温和身体温度调整到更适合放松的区间，入睡往往会更平稳。很多人以为自己是“入睡困难”，其实只是没有给身体足够的过渡时间。',
    tag: '睡眠节律',
  },
  {
    title: '枕头高度并没有标准答案，要看你的睡姿与肩宽',
    summary:
      '选枕头最常见的误区，就是试图寻找一个“万能高度”。事实上，仰卧时头颈更需要后侧支撑的连续性，而侧卧时则需要填补肩部与床面之间的高度差。肩宽较宽、床垫较软的人，对枕头支撑的需求也会不同。真正合适的枕头，并不是最软、最高级或最贵，而是能让颈椎在睡眠中尽量保持自然中立位，减少醒来后的酸胀、落枕和头颈僵硬。',
    tag: '人体工学',
  },
  {
    title: '为什么你睡够了时间，却还是觉得没恢复过来',
    summary:
      '“睡了八小时还是累”并不罕见。问题往往不在于总时长，而在于睡眠结构是否被频繁打断。夜间多次觉醒、卧室温度不稳定、枕头和床垫支撑不适、饮酒或过晚进食，都可能让身体一直停留在浅睡阶段，无法完成足够的深睡和 REM 睡眠。对恢复力来说，连续性比时长更重要。与其一味追求更长的卧床时间，不如先改善那些让睡眠被切碎的具体因素。',
    tag: '恢复效率',
  },
];

const SleepJournal: React.FC = () => {
  return (
    <section id="health" className="section sleep-journal">
      <div className="container">
        <div className="journal-header">
          <div>
            <h4 className="section-subtitle">睡眠专栏</h4>
            <h2 className="section-title">关于睡眠的三篇小文章，
              <br />不夸张，也不制造焦虑</h2>
          </div>
          <p>
            我们更希望分享经过长期验证、普通人也能理解并实践的睡眠常识。它们不替代诊疗，但足够帮助你更清醒地看待“睡不好”这件事。
          </p>
        </div>
        <div className="journal-grid">
          {articles.map((article) => (
            <article key={article.title} className="journal-card">
              <span className="journal-tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SleepJournal;
