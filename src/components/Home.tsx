import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import ProductList from "./ProductList"


const Home = () => {

  const [product,setProducts] = useState([])

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
  }

  useEffect(()=> {
    getProducts()
  },[])

  return (
    <>
    <Menubar />
    <ProductList  products={product}/>
    </>
  )
}

export default Home