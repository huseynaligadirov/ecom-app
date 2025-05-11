import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img src={product.photos[0]} alt={product.title} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    </Link>
  );
}