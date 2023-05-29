import Bio from "@/components/Bio";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import PopularMenu from "@/components/PopularMenu";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Category />
      <Bio />
      <PopularMenu />
    </main>
  );
};

export default HomePage;
