"use client";

import MenuCategory from "@/components/MenuCategory";
import { useMenu } from "@/hooks/useMenu";

const MenuPage = () => {
  const [menu] = useMenu();
  const burgers = menu.filter((item: any) => item.category === "burgers");
  const pasta = menu.filter((item: any) => item.category === "pasta");
  const ramen = menu.filter((item: any) => item.category === "ramen");
  const beef = menu.filter((item: any) => item.category === "beef");
  const chicken = menu.filter((item: any) => item.category === "chicken");

  return (
    <main>
      <MenuCategory
        items={burgers}
        cover="https://images.pexels.com/photos/3566357/pexels-photo-3566357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Burgers"
        paragraph="Experience the perfect fusion of juicy flavors, succulent textures, and mouthwatering aromas in our expertly crafted burgers. Each bite is a tantalizing journey that satisfies your senses and leaves you craving for more."
      />
      <MenuCategory
        items={pasta}
        cover="https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Pasta"
        paragraph="Delight in the sublime balance of tender pasta, robust sauces, and carefully selected ingredients, as our pasta dishes take your taste buds on an unforgettable journey. Experience the artistry of Italian cuisine in every delectable bite."
      />
      <MenuCategory
        items={ramen}
        cover="https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Ramen"
        paragraph="Savor the umami-rich broth, springy noodles, and an array of toppings that harmonize perfectly to create an unforgettable bowl of ramen. From the first spoonful to the last, immerse yourself in a culinary symphony of taste and texture that will leave you craving more."
      />
      <MenuCategory
        items={beef}
        cover="https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Beef"
        paragraph="Indulge in the succulent tenderness and robust flavor of high-quality beef, expertly prepared to perfection. Each bite is a tantalizing temptation that satisfies carnivorous cravings and leaves a lasting impression on your palate."
      />
      <MenuCategory
        items={chicken}
        cover="https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Chicken"
        paragraph="Discover the culinary versatility of chicken, whether grilled, roasted, or fried, offering a tender and juicy experience with every bite. From comforting classics to bold and innovative flavors, chicken dishes are a perennial favorite that never fails to satisfy cravings and ignite taste buds."
      />
    </main>
  );
};

export default MenuPage;
