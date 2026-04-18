import { useEffect,useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Products(){

  const [products,setProducts] = useState([]);

  useEffect(()=>{

    API.get("/products")
      .then(res=>setProducts(res.data));

  },[])

  return(

    <div className="max-w-7xl mx-auto p-8">

      <h2 className="text-3xl font-bold mb-6">
        Menu
      </h2>

      <div className="grid grid-cols-4 gap-6">

        {products.map(p=>(
          <ProductCard key={p.id} product={p}/>
        ))}

      </div>

    </div>

  );
}