import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";


import Card from "../components/Card";
import Loader from "../components/Loader";
import {useProducts} from "../context/ProductsContext"
import styles  from "./ProductsPage.module.css";
import {searchProducts, filterProducts ,getInitialQuery  } from "../helper/helper";

import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";


function ProductsPage() {
  const {products} = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => getInitialQuery(searchParams));
  const [search, setSearch] = useState(query.search || "");
  const displayed = filterProducts(searchProducts(products, query.search), query.category);

  useEffect(()=> {
    setSearchParams(query);
  }, [query, setSearchParams]);

 

  

  return (
    <>
   <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
    <div className={styles.container}>
     <div className={styles.products}>
      {!displayed.length && <Loader/>}
          {displayed.map((p) => (<Card key={p.id} data={p}/>))}
     </div>
     <SideBar query= {query} setQuery={setQuery}/>
    </div>
    </>
  )
}

export default ProductsPage