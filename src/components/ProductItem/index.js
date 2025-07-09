import "./index.css";

function ProductItem({ product }) {
  const { title, image, price, rating } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">💰 ${price.toFixed(2)}</p>
      <p className="product-rating">
        ⭐ {rating.rate} ({rating.count})
      </p>
    </div>
  );
}

export default ProductItem;
