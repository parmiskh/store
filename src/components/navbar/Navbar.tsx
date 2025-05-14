import { Link } from "react-router-dom";
import Container from "../container/Container";

export default function Navbar() {
  return (
    <div className="h-14 shadow-md w-full border-b flex items-center justify-between">
      <Container>
        <div className=" flex items-center justify-between">
          <ul className="flex">
            <li className="ml-4">
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>
          <div className=" flex items-center py-2 px-3 rounded-md border bg-slate-500 text-white">
            <Link to="/cart">
              <button>سبد خرید</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
