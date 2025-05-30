import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

export default function ProductPage() {
  const params = useParams();
  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="bg-blue-200 col-span-2 rounded-r-sm">
            <img
              className="p-2 rounded-md"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
              alt=""
            />
            <Button className="mt-2 w-full !py-3" variant="primary">
              add to cart
            </Button>
          </div>
          <div className="col-span-10 p-7 ">
            <h1 className="mb-5 font-bold">عنوان محصول</h1>
            <div>
              <p className="mb-2">قیمت: ۲۵ریال</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                dolore saepe distinctio numquam voluptas, debitis qui ex nulla
                velit autem vel totam repellendus expedita, laboriosam
                exercitationem neque voluptates quidem ipsum? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Nostrum dolore saepe
                distinctio numquam voluptas, debitis qui ex nulla velit autem
                vel totam repellendus expedita, laboriosam exercitationem neque
                voluptates quidem ipsum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nostrum dolore saepe distinctio numquam
                voluptas, debitis qui ex nulla velit autem vel totam repellendus
                expedita, laboriosam exercitationem neque voluptates quidem
                ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum dolore saepe distinctio numquam voluptas, debitis qui ex
                nulla velit autem vel totam repellendus expedita, laboriosam
                exercitationem neque voluptates quidem ipsum?
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
