"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) =>
        setMenu(data.filter((item: any) => item.category === "popular"))
      );
  }, []);

  return (
    <section className="py-20">
      <SectionTitle
        title="Favorites Unveiled: Exploring Our Popular Menu Delights"
        subTitle="Popular Menu"
      />

      <div className="wrapper grid lg:grid-cols-2 gap-10">
        {menu.map((item: any) => (
          <MenuItem
            key={item._id}
            name={item.name}
            image={item.image}
            recipe={item.recipe}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
