import Cover from "@/components/Cover";
import PopularMenu from "@/components/PopularMenu";

const MenuPage = () => {
  return (
    <main>
      <Cover
        image="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg"
        title="Our Menu"
        paragraph="Savor an exquisite culinary experience with our thoughtfully crafted menu, featuring a harmonious blend of flavors and inspired creations that will leave you craving for another bite."
      />
      <PopularMenu />
      <Cover
        image="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg"
        title="Our Menu"
        paragraph="Savor an exquisite culinary experience with our thoughtfully crafted menu, featuring a harmonious blend of flavors and inspired creations that will leave you craving for another bite."
      />
      <PopularMenu />
      <Cover
        image="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg"
        title="Our Menu"
        paragraph="Savor an exquisite culinary experience with our thoughtfully crafted menu, featuring a harmonious blend of flavors and inspired creations that will leave you craving for another bite."
      />
      <PopularMenu />
    </main>
  );
};

export default MenuPage;
