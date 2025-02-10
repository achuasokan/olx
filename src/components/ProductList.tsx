import { Link } from "react-router-dom"



type productProp = {
  products :any
}

const ProductList = ({products}:productProp) => {
  return (
    <>
    <div className=" grid grid-cols-4 p-5">
      {
        products?.map((data: any) => (
          <Link key={data.id} to={`/Detail/${data.id}`}>
                     <div className="border border-spacing-1 p-2 ml-3 mt-3" key={data.id}>
            <img src={data?.image} className="w-60 h-48 "  alt='product image'/>
            <h1 className="font-bold text-xl">$ {data?.price}</h1>
            <h1> {data?.title}</h1>
            <h1> {data?.category}</h1>
          </div>

          </Link>

        ))
      }
    </div>
    </>
  )
}

export default ProductList