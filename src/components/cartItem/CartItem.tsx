import Button from "../button/Button";

export default function CartItem() {
  return (
    <div className="flex mt-4 border-b-2 ">
      <img
        className="p-2 w-28 rounded-md"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
        alt=""
      />

      <div className="mr-4">
        <h3>عنوان محصول</h3>
        <Button variant="primary">+</Button>
        <span>{2}</span>
        <Button variant="primary">-</Button>
        <Button variant="danger">remove</Button>
      </div>
    </div>
  );
}
