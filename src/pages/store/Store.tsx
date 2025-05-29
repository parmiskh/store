import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import { useEffect, useState } from "react";
import type { Products } from "../../types/servers";


export default function Store() {
const [products, setProducts] = useState<Products[]>([]);


useEffect(() => {
  getProducts()
    .then((res) => {
      console.log("products loaded:", res);
      setProducts(res);
    })
    .catch((err) => {
      console.error("error loading products:", err);
    });
}, []);
  
  return (
    <div>
      <Container>
        <h1 className="my-5">جدیدترین محصولات</h1>

        <div className="grid grid-cols-4 gap-4">
          {products.map((item) => (
            <Link to={`/product/${item.id}`}>
            <ProductItem {...item}/>
          </Link>
          ))}

          
         
        </div>
      </Container>
    </div>
  );
}
