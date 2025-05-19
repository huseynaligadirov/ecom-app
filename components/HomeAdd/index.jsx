import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

async function getCategoriesFromFirestore() {
  const querySnapshot = await getDocs(collection(db, 'products'));
  const products = querySnapshot.docs.map(doc => doc.data());

  const uniqueCategories = [...new Set(products.map(p => p.category))];

  const categoryImages = {
    bracelet: 'https://i.pinimg.com/474x/47/99/0e/47990e29b594921cf2740f16f71918f4.jpg',
    earring: 'https://i.pinimg.com/474x/d8/6c/2c/d86c2c9b682d634ce574df795bade08f.jpg',
    watch: 'https://i.pinimg.com/474x/51/b2/92/51b29250597ee90a811c2c3211aa8647.jpg',

  };

  const formattedCategories = uniqueCategories.map(cat => ({
    name: cat.charAt(0).toUpperCase() + cat.slice(1),
    slug: cat,
    image: categoryImages[cat] || `https://via.placeholder.com/300x300?text=${cat}`,
  }));

  return formattedCategories;
}

export default async function HomeAdd() {
  const categories = await getCategoriesFromFirestore();

  const reviews = [
    {
      id: 1,
      text: 'Beautiful craftsmanship and fast shipping!',
      author: 'Aylin K.',
    },
    {
      id: 2,
      text: 'Absolutely love my new bracelet!',
      author: 'Merve T.',
    },
    {
      id: 3,
      text: 'Great quality and elegant packaging.',
      author: 'Zeynep Y.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero-section2">
        <div className="hero-overlay2"></div>
        <div className="hero-content2">
          <h1>Welcome to Benim Jewelry</h1>
          <p>Timeless elegance, crafted for you</p>
          <Link href="/products">
            <button className="cta-button bg-red-800 hover:bg-red-700 transition-colors duration-300 shadow-md">Explore Collections</button>
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <div className="categories-container">
        <h2 className="section-title text-red-900">Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link key={index} href={`/products?category=${category.slug}`} className="category-link">
              <div className="category-card">
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SpecialOffer */}
      <section className="special-offer" id='indirimler'>
        <div className="offer-content text-red-500 font-medium ">
          <h2>Limited Time Offer!</h2>
          <p>
            Get 15% off with code: <strong>GOLD15</strong>
          </p>
          <button className="offer-button mt-8 ">Shop Now</button>
        </div>
      </section>

      {/* Testimonials */}
      <div className="testimonials-container">
        <h2 className="section-title text-red-900">Loved by Customers</h2>
        <div className="reviews-grid text-gray-900">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p>"{review.text}"</p>
              <span className='text-gray-500'>— {review.author}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
