import { useEffect,useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Products(){

  const [products,setProducts] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(()=>{

    API.get("/products")
      .then(res=>setProducts(res.data));

  },[])

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return(

    <div className="max-w-7xl mx-auto p-8">

      <h2 className="text-3xl font-bold mb-4">
        Menu
      </h2>

      <SearchBar search={search} setSearch={setSearch}/>

      <div className="grid grid-cols-4 gap-6">

        {filteredProducts.map(p => (

          <ProductCard key={p.id} product={p}/>

        ))}

      </div>

      {filteredProducts.length === 0 && (

        <p className="text-gray-500 mt-6">
          No items found
        </p>

      )}

    </div>

  );
}