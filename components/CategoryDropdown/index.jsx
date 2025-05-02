'use client';

import { useRouter } from 'next/navigation';

export default function CategoryDropdown({ categories, selectedCategory, searchQuery }) {
  const router = useRouter();

  const handleChange = (e) => {
    const category = e.target.value;
    let url = `/products?category=${category}`;
    if (searchQuery) {
      url += `&search=${searchQuery}`;
    }
    router.push(url);
  };

  return (
    <select
      value={selectedCategory}
      onChange={handleChange}
      className="category-select"
    >
      {categories.map(category => (
        <option key={category} value={category}>
          {category === 'all' ? 'All Categories' : category}
        </option>
      ))}
    </select>
  );
}