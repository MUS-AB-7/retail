import { FaSearch } from "react-icons/fa";

export default function SearchBar({search,setSearch}){

  return(

    <div className="relative mb-6">

      <FaSearch className="absolute top-3 left-3 text-gray-400"/>

      <input
        type="text"
        placeholder="Search pizza, drinks, bread..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="w-full border rounded-lg pl-10 pr-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      />

    </div>

  );

}