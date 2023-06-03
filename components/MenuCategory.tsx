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
      <div className="wrapper grid lg:grid-cols-2 gap-10 my-10">
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
    </section>
  );
};

export default MenuCategory;
