import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";

interface MenuItemProps {
  name: string;
  image: string;
  recipe: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, image, recipe, price }) => {
  return (
    <div className="grid grid-cols-7 gap-5 h-[10rem]">
      <div className="col-span-2 w-full h-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="col-span-4 space-y-1">
        <h3 className="uppercase text-xl">{name}</h3>
        <p className="text-black/60">{recipe}</p>
      </div>
      <p className="text-xl">{formatCurrency(price)}</p>
    </div>
  );
};

export default MenuItem;
