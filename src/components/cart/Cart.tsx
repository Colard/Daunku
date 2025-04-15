import "./chart.scss";
import chart from "../../assets/hero/chart.svg";

interface ChartProps extends React.ComponentPropsWithoutRef<"a"> {
  count: number;
}

let Cart: React.FC<ChartProps> = ({ className, href, count, ...rest }) => {
  return (
    <a
      href={href && "#"}
      className={`chart${className ? " " + className : ""}`}
      {...rest}
    >
      <img alt="Logo" src={chart} className="chart__image"></img>
      <div className="chart__count">
        <span>{count}</span>
      </div>
    </a>
  );
};

export default Cart;
