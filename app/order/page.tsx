"use client";

import { useMenu } from "@/hooks/useMenu";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cover from "@/components/Cover";
import OrderTab from "@/components/OrderTab";
import "react-tabs/style/react-tabs.css";

const categories = ["burgers", "pasta", "ramen", "beef", "chicken"];

interface SearchParamsProps {
  category: string | undefined;
}

const OrderFoodPage = ({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) => {
  const initialIndex = searchParams.category
    ? categories.indexOf(searchParams.category)
    : 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const burgers = menu.filter((item: any) => item.category === "burgers");
  const pasta = menu.filter((item: any) => item.category === "pasta");
  const ramen = menu.filter((item: any) => item.category === "ramen");
  const beef = menu.filter((item: any) => item.category === "beef");
  const chicken = menu.filter((item: any) => item.category === "chicken");

  return (
    <main>
      <section>
        <Cover
          image="https://images.pexels.com/photos/13485218/pexels-photo-13485218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Order Food"
          paragraph="Ordering food has never been easier! With our convenient online platform, you can browse through a wide variety of delicious cuisines and place your order with just a few clicks. Enjoy the convenience of doorstep delivery and satisfy your cravings in no time."
        />

        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="py-20 text-center"
        >
          <TabList>
            <Tab>Burgers</Tab>
            <Tab>Pasta</Tab>
            <Tab>Ramen</Tab>
            <Tab>Beef</Tab>
            <Tab>Chicken</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={burgers} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pasta} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={ramen} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={beef} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={chicken} />
          </TabPanel>
        </Tabs>
      </section>
    </main>
  );
};

export default OrderFoodPage;
