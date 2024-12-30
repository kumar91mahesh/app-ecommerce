import NotFoundPage from "@/app/not-found";
export const dynamic = "force-dynamic";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // const product = products.find((p) => p.id === params.id);
  const response = await fetch(
    process.env.NEXT_PUBLIC_SITE_URL + "/api/products/" + params.id
  );
  const product = await response.json();
  if (!product) {
    return <NotFoundPage />;
  }
  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row">
      <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
        <img
          src={"/" + product.imageUrl}
          alt="image"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          Product Details: {product!.name}
        </h1>
        <p className="text-2xl text-grey-600"> {product?.price}</p>
      </div>
    </div>
  );
}
