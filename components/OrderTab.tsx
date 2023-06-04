import { useEffect, useState } from "react";
import Card from "./Card";
import clsx from "clsx";

const itemLimit = 4;

const OrderTab = ({ items }: any) => {
  const [curPageItems, setCurPageItems] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (items) {
      setCurPageItems(
        items.slice(active * itemLimit, active * itemLimit + itemLimit)
      );
    }
  }, [items, active]);

  const pageCount = Math.ceil(items.length / 5);

  const handleChange = (i: number) => {
    setActive(i);
  };

  return (
    <>
      <div className="wrapper grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-5">
        {curPageItems.map((item: any) => (
          <Card
            key={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            recipe={item.recipe}
          />
        ))}
      </div>
      {pageCount > 1 && (
        <div className="flex justify-center mt-10 gap-3">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              className={clsx(
                "h-10 w-10 border border-secondary rounded-full",
                active === i && "bg-secondary"
              )}
              onClick={() => handleChange(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default OrderTab;
