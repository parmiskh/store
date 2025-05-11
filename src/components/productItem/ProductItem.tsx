export default function ProductItem() {
  return (
    <div className="border rounded-md">
      <img
        className="rounded-t-md"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
        alt=""
      />
      <div className="flex justify-between items-center p-4">
        <h3>عنوان محصول</h3>
        <span>55$</span>
      </div>
      <div className="p-4">
       <p className="line-clamp-2">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
        incidunt reiciendis error perferendis tenetur! Tempora repellendus,
        magni vero ipsa tenetur inventore porro natus autem, voluptatem alias
        perspiciatis illo dolores et!
       </p>
      </div>
    </div>
  );
}
