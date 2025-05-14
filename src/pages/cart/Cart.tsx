import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";

export default function Cart() {
    return(
        <div>
            <Container>
                <div>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>

                <div className="bg-gray-300">
                    <p>قیمت کل: 1,000</p>
                    <p>تخفیف شما: 200</p>
                    <p>قیمت نهایی: 800</p>
                </div>

                <Button variant="success">
                    ثبت سفارش
                </Button>
            </Container>
        </div>
    )
}