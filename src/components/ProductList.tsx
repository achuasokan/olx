import { Link } from "react-router-dom";

const ProductList = ({ products, searches }:any) => {
  return (
    <>
      <div className="grid grid-cols-4 p-5 w-full">
        {products.filter((data:any)=> data?.title?.includes(searches)).map((data: any) => (
          <Link key={data.id} to={`/Detail/${data.id}`}>
            <div className="border border-spacing-1 p-2 ml-3 mt-3">
              <img src={data.image} className="w-full object-cover h-62" alt='product image' />
              <h1 className="font-bold text-xl">$ {data.price}</h1>
              <h1>{data.title}</h1>
              <h1>{data.category}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;