import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

interface CardProps {
  image: string;
  name: string;
  recipe: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, name, recipe, price }) => {
  return (
    <div className="card w-full bg-base-100 shadow-md">
      <figure className="h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          priority
          height={500}
          width={500}
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-black/60">{recipe}</p>
        <div className="card-actions items-center">
          <p className="card-title text-secondary-focus">
            {formatCurrency(price)}
          </p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
