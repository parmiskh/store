import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { Link } from "react-router-dom";

export default function Store() {
  return (
    <div>
      <Container>
        <h1 className="my-5">جدیدترین محصولات</h1>

        <div className="grid grid-cols-4 gap-4">
          <Link to={`/product/${1}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${2}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${3}`}>
            <ProductItem />
          </Link>{" "}
          <Link to={`/product/${4}`}>
            <ProductItem />
          </Link>
          <Link to={`/product/${5}`}>
            <ProductItem />
          </Link>
        </div>
      </Container>
    </div>
  );
}
