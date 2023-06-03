import Link from "next/link";
import Cover from "./Cover";
import MenuItem from "./MenuItem";

interface MenuCategoryProps {
  items: any;
  cover: string;
  title: string;
  paragraph: string;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({
  items,
  cover,
  title,
  paragraph,
}) => {
  return (
    <section>
      <Cover image={cover} title={title} paragraph={paragraph} />
      <div className="wrapper grid lg:grid-cols-2 gap-10 pt-20 pb-10">
        {items.map((item: any) => (
          <MenuItem
            key={item._id}
            name={item.name}
            image={item.image}
            recipe={item.recipe}
            price={item.price}
          />
        ))}
      </div>

      <div className="flex justify-center pb-20">
        <Link
          href={`/order?category=${title.toLowerCase()}`}
          className="btn btn-secondary"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
