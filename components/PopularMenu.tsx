"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import Link from "next/link";

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

      <div className="wrapper grid lg:grid-cols-2 gap-10 mb-10">
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

      <div className="flex justify-center">
        <Link href="/" className="btn btn-secondary">
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
