import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";

// هنوز API نگرفتم اینجا
export default function Cart() {
  return (
    <div>
      <Container>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="bg-gray-300 p-3 flex flex-col gap-2 rounded-md my-5               ">
          <p>
            <span className="text-blue-700">قیمت کل: </span>1,000{" "}
          </p>
          <p>
            <span className="text-blue-700">تخفیف: </span>200{" "}
          </p>
          <p>
            <span className="text-blue-700">مبلغ نهایی:  </span>200{" "}
          </p>
        </div>

        <Button variant="success">ثبت سفارش</Button>
      </Container>
    </div>
  );
}
