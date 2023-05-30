import Hero from "@/components/Hero";
import Category from "@/components/Category";
import Bio from "@/components/Bio";
import PopularMenu from "@/components/PopularMenu";
import CallUs from "@/components/CallUs";
import ChefRecommends from "@/components/ChefRecommends";
import Featured from "@/components/Featured";
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
