"use client";

import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useMenu } from "@/hooks/useMenu";
import Cover from "@/components/Cover";
import OrderTab from "@/components/OrderTab";

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

  const [value, setValue] = useState<string>(initialIndex.toString());

  const [menu] = useMenu();

  const burgers = menu.filter((item: any) => item.category === "burgers");
  const pasta = menu.filter((item: any) => item.category === "pasta");
  const ramen = menu.filter((item: any) => item.category === "ramen");
  const beef = menu.filter((item: any) => item.category === "beef");
  const chicken = menu.filter((item: any) => item.category === "chicken");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <main>
      <section className="pb-10">
        <Cover
          image="https://images.pexels.com/photos/13485218/pexels-photo-13485218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Order Food"
          paragraph="Ordering food has never been easier! With our convenient online platform, you can browse through a wide variety of delicious cuisines and place your order with just a few clicks. Enjoy the convenience of doorstep delivery and satisfy your cravings in no time."
        />

        <Box>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList
                aria-label="Order Food Tabs"
                onChange={handleChange}
                centered
              >
                <Tab label="Burgers" value="0" />
                <Tab label="Pasta" value="1" />
                <Tab label="Ramen" value="2" />
                <Tab label="Beef" value="3" />
                <Tab label="Chicken" value="4" />
              </TabList>
            </Box>

            <TabPanel value="0">
              <OrderTab items={burgers} />
            </TabPanel>
            <TabPanel value="1">
              <OrderTab items={pasta} />
            </TabPanel>
            <TabPanel value="2">
              <OrderTab items={ramen} />
            </TabPanel>
            <TabPanel value="3">
              <OrderTab items={beef} />
            </TabPanel>
            <TabPanel value="4">
              <OrderTab items={chicken} />
            </TabPanel>
          </TabContext>
        </Box>
      </section>
    </main>
  );
};

export default OrderFoodPage;
