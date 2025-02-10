import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import ProductList from "./ProductList"
import { db } from '../services/firebase'; // Import your Firestore configuration
import { collection, getDocs } from 'firebase/firestore';



const Home = ({search}:any) => {

  const [products,setProducts] = useState([])
  

  const getProducts = async () => {
    const productsCollection = collection(db, 'products');
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProducts(productList);
  };

  useEffect(()=> {
    getProducts()
  },[])

  return (
    <>
    <Menubar />
    <ProductList  products={products} searches={search}/>
    </>
  )
}

export default Home