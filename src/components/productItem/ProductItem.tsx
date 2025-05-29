import type { Products } from "../../types/servers";

type ProductItem = Products;

export default function ProductItem({
  title,
  price,
  description,
  image,
}: ProductItem) {
  return (
    <div className="border rounded-md h-lvh flex flex-col justify-between ">
      <div className="flex justify-center mt-4 items-center ">
        <img
          className="rounded-t-md "
          src={image}
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center p-4 align-bottom">
        <div className="flex justify-between items-center p-4 align-bottom">
          <h3 className="line-clamp-1">{title}</h3>
          <span>{price}</span>
        </div>
        <div className="p-4">
          <p className="line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
