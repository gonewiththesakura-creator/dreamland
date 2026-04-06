import './StoreExperience.css';

const perks = [
  '7天深睡试睡计划',
  '1对1 枕型匹配建议',
  '天然材质说明与养护指南',
  '支持线下门店体验与线上复购',
];

const StoreExperience: React.FC = () => {
  return (
    <section className="section store-experience">
      <div className="container store-grid">
        <div className="store-copy">
          <h4 className="section-subtitle">门店与服务</h4>
          <h2 className="section-title">不只是下单，
            <br />而是一整套更好的睡眠体验</h2>
          <p>
            从线上咨询到线下试躺，从枕型建议到睡眠习惯优化，Dreamland 希望把真正有效的恢复体验带到每一位用户身边。
          </p>
          <ul>
            {perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
          <div className="store-actions">
            <button className="btn-primary">预约门店体验</button>
            <button className="btn-outline">联系客服</button>
          </div>
        </div>
        <div className="store-card">
          <div className="store-card-inner">
            <span>Dreamland Care</span>
            <h3>为肩颈、睡姿与恢复节律定制建议</h3>
            <p>
              适合久坐办公、长期浅眠、肩颈僵硬与换季敏感人群，帮助你找到真正适合自己的睡眠支撑系统。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreExperience;
