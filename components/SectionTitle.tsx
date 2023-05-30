import { clsx } from "clsx";

interface SectionTitleProps {
  title: string;
  subTitle: string;
  reverseColor?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subTitle,
  reverseColor,
}) => {
  return (
    <div className="wrapper text-center pb-10">
      <span className="uppercase font-semibold tracking-widest text-secondary-focus">
        {subTitle}
      </span>
      <h2 className={clsx("text-3xl", reverseColor && "text-white")}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
