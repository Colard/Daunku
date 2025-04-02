import GradientButton from "../gradient-button/GradientButton";
import StarsRating from "../stars-rating/StarsRating";
import "./product-preview.scss";

interface ProductPreviewProps
  extends React.ComponentPropsWithoutRef<"article"> {
  src: string;
  title: string;
  rate: number;
  price: number;
}

let ProductPreview: React.FC<ProductPreviewProps> = ({
  src,
  title,
  rate,
  price,
  className,
  ...rest
}) => {
  return (
    <article
      className={"product-preview" + (className ? " " + className : "")}
      {...rest}
    >
      <div className="product-preview__image-container">
        <img className="product-preview__image" src={src}></img>
      </div>

      <div className="product-preview__product-card">
        <div className="product-preview__main-info">
          <h3 className="product-preview__title">{title}</h3>

          <StarsRating rate={rate} className="product-preview__rate" />
        </div>

        <div className="product-preview__buy-info">
          <h4 className="product-preview__price">${price.toFixed(2)}</h4>
          <div className="product-preview__button-container">
            <GradientButton
                buttonType="anchor"
                className="product-preview__button"
            >
                <p className="product-preview__plus"></p>
            </GradientButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductPreview;
