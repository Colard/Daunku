import "./link-with-arrow.scss";
import arrow from "../../assets/best-seller/arrow.svg"

interface LinkWithArrowProps extends React.ComponentPropsWithoutRef<"a"> {
  href: string;
}

let LinkWithArrow: React.FC<LinkWithArrowProps> = ({
  href,
  children,
  className,
  ...rest
}) => {
  return (
    <a
      className={"arrow-link" + (className ? " " + className : "")}
      href={href}
      {...rest}
    >
      <p className="arrow-link__text">{children}</p>

      <div className="arrow-link__image-container">
        <img className="arrow-link__image" src={arrow}></img>
      </div>
    </a>
  );
};

export default LinkWithArrow;
