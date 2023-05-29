interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className="text-center pb-10 px-5 lg:px-0">
      <span className="uppercase font-semibold tracking-widest text-secondary-focus">
        {subTitle}
      </span>
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;
