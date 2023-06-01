"use client";

import { useMenu } from "@/hooks/useMenu";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item: any) => item.category === "popular");

  return (
    <section className="py-20">
      <SectionTitle
        title="Favorites Unveiled: Exploring Our Popular Menu Delights"
        subTitle="Popular Menu"
      />

      <div className="wrapper grid lg:grid-cols-2 gap-10 mb-10">
        {popular.map((item: any) => (
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
