import "./chart.scss";
import chart from "../../assets/hero/chart.svg";

interface ChartProps extends React.ComponentPropsWithoutRef<"a"> {}

let Chart: React.FC<ChartProps> = ({ className, href, ...rest }) => {
  return (
    <a
      href={href && "#"}
      className={`chart${className ? " " + className : ""}`}
      {...rest}
    >
      <img alt="Logo" src={chart} className="chart__image"></img>
      <div className="chart__count">
        <span>1</span>
      </div>
    </a>
  );
};

export default Chart;
