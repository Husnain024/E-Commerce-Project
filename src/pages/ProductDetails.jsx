import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold">Product Details</h1>

      <img
        src={product.image}
        alt={product.name}
        className="h-96 w-full rounded-xl object-cover"
      />

      <h2 className="mt-8 text-3xl font-bold">{product.name}</h2>

      <p className="mt-3 text-lg text-gray-500">{product.category}</p>

      <p className="mt-4 text-3xl font-bold text-blue-600">${product.price}</p>

      <p className="mt-3 text-yellow-500">⭐ {product.rating}</p>
    </div>
  );
}

export default ProductDetails;
