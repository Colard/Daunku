import "./stars-rating.scss";
import "../../assets/star.svg";

interface StarsRatingProps extends React.ComponentPropsWithRef<"div"> {
  rate: number;
}

let StarsRating: React.FC<StarsRatingProps> = ({
  rate,
  className,
  ...rest
}) => {
  rate = rate < 0 ? 0 : rate > 5 ? 5 : rate;
  let percent = (rate/5) * 100;

  return (
    <div
      className={"stars-rating" + (className ? " " + className : "")}
      {...rest}
    >
      <div className="stars-rating__item"></div>
      <div className="stars-rating__item"></div>
      <div className="stars-rating__item"></div>
      <div className="stars-rating__item"></div>
      <div className="stars-rating__item"></div>
      <div
        className="stars-rating__rate-percent"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default StarsRating;
