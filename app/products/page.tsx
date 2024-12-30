import ProductsList from "../ProductsList";
export const dynamic = "force-dynamic";
import { products } from "../product-data";
export default async function ProductsPage() {
  //   const response = await fetch(
  //     process.env.NEXT_PUBLIC_SITE_URL + "/api/products"
  //   );

  //   const products = await response.json();
  //   const response2 = await fetch(
  //     process.env.NEXT_PUBLIC_SITE_URL + "/api/users/2/cart",
  //     {
  //       cache: "no-cache",
  //     }
  //   );

  //   const cartProducts = await response2.json();
  const cartProducts = [];

  return (
    <>
      <h1>Products</h1>
      <ProductsList products={products} intialCartProducts={cartProducts} />
    </>
  );
}
