import "./image-tooltip.scss";
import tooltipImage from "../../assets/hero/Tooltip.svg";

interface TooltipProps extends React.ComponentPropsWithoutRef<"div"> {
  price: number;
  name: string;
}

let ImageTooltip: React.FC<TooltipProps> = ({
  className,
  price,
  name,
  ...rest
}) => {
  name = name.length > 15 ? name.slice(0, 15) + "..." : name;

  return (
    <div className={`tooltip${className ? " " + className : ""}`} {...rest}>
      <div className="tooltip__button">
        <div></div>
      </div>

      <div className="tooltip__text-block">
        <p className="tooltip__price">${price.toFixed(2)}</p>
        <p className="tooltip__name">{name}</p>
        <img className="tooltip__background" alt="Tooltip" src={tooltipImage} />
      </div>
    </div>
  );
};

export default ImageTooltip;
