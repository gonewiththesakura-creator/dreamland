import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Dreamland</h2>
            <p>重塑深度睡眠，回归自然本真。</p>
          </div>
          <div className="footer-links">
            <h3>探索</h3>
            <ul>
              <li><a href="#">关于我们</a></li>
              <li><a href="#">明星产品</a></li>
              <li><a href="#">睡眠专栏</a></li>
              <li><a href="#">寻找门店</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>客户服务</h3>
            <ul>
              <li><a href="#">联系我们</a></li>
              <li><a href="#">退换货政策</a></li>
              <li><a href="#">常见问题</a></li>
              <li><a href="#">保养指南</a></li>
            </ul>
          </div>
          <div className="footer-newsletter">
            <h3>订阅电子报</h3>
            <p>获取最新睡眠建议与产品上新资讯。</p>
            <div className="newsletter-form">
              <input type="email" placeholder="您的邮箱地址" />
              <button>→</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dreamland 梦想国. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">隐私政策</a>
            <a href="#">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;