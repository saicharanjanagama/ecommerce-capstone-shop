const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    return res.json();
}

export async function fetchProductById(id) {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    return res.json();
}

export async function fetchCategories() {
  const res = await fetch(`${BASE_URL}/products/categories`);
  return res.json();
} 
