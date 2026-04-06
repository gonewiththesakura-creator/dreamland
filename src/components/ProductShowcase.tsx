import './ProductShowcase.css';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      id: 1,
      name: '云梦·天然乳胶护颈枕',
      desc: '泰国进口原液，蜂窝透气结构，完美贴合肩颈曲线。',
      price: '¥ 699',
      tags: ['畅销款', '侧卧首选'],
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      name: '静夜·植物凝胶记忆枕',
      desc: '恒温凝胶结合慢回弹记忆棉，给您带来整夜清凉安睡。',
      price: '¥ 899',
      tags: ['清凉透气', '仰卧推荐'],
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      name: '归真·天然荞麦安神枕',
      desc: '精选高山苦荞麦，透气排汗，古法护颈，自带淡淡谷物香。',
      price: '¥ 399',
      tags: ['传统养生', '可调节高度'],
      image:
        'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section id="products" className="section product-showcase">
      <div className="container">
        <div className="text-center mb-4">
          <h4 className="section-subtitle">明星产品</h4>
          <h2 className="section-title">为不同睡姿与恢复需求，
            <br />准备更合适的支撑系统</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-box">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-tags">
                  {product.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="product-footer">
                  <span className="price">{product.price}</span>
                  <button className="btn-add">加入购物车</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4" style={{ marginTop: '3rem' }}>
          <button className="btn-outline">查看全部产品</button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
