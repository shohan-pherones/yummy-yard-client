import Bio from "@/components/Bio";
import CallUs from "@/components/CallUs";
import Category from "@/components/Category";
import ChefRecommends from "@/components/ChefRecommends";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import PopularMenu from "@/components/PopularMenu";
import Testimonials from "@/components/Testimonials";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Category />
      <Bio />
      <PopularMenu />
      <CallUs />
      <ChefRecommends />
      <Featured />
      <Testimonials />
    </main>
  );
};

export default HomePage;
