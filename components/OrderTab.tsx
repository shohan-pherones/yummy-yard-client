import Card from "./Card";

const OrderTab = ({ items }: any) => {
  return (
    <div className="wrapper grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
      {items.map((item: any) => (
        <Card
          key={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          recipe={item.recipe}
        />
      ))}
    </div>
  );
};

export default OrderTab;
