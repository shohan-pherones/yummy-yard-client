"use client";

import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data.filter((item: any, i: number) => i <= 3)));
  }, []);

  return (
    <section className="pb-20">
      <SectionTitle
        title="Chef's Picks: Delectable Recommendations"
        subTitle="Chef Recommends"
      />

      <div className="wrapper grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {menu.map((item: any) => (
          <Card
            key={item._id}
            image={item.image}
            name={item.name}
            recipe={item.recipe}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
