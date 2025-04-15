import LinkWithArrow from "../../components/link-with-arrow/LinkWithArrow";
import ProductPreview from "../product-preview/ProductPreview";

import plant1 from "../../assets/best-seller/plant1.png";
import plant2 from "../../assets/best-seller/plant2.png";
import plant3 from "../../assets/best-seller/plant3.png";

import "./best-seller.scss";
import Container from "../../components/container/Container";

interface BestSellerProps extends React.ComponentPropsWithoutRef<"section"> {}

let BestSeller: React.FC<BestSellerProps> = ({ className, ...rest }) => {
  return (
    <section
      className={"best-seller" + (className ? " " + className : "")}
      {...rest}
    >
      <Container>

        <h2 className="best-seller__header">Best Seller Product</h2>

        <LinkWithArrow href="#" className="best-seller__link">
          See all colection
        </LinkWithArrow>
  

        <div className="best-seller__product-list">
          <ProductPreview
            className="best-seller__product"
            src={plant1}
            title="Cammile"
            rate={5}
            price={65}
          ></ProductPreview>

          <ProductPreview
            className="best-seller__product"
            src={plant2}
            title="Cammile"
            rate={4.5}
            price={65}
          ></ProductPreview>

          <ProductPreview
            className="best-seller__product"
            src={plant3}
            title="Cammile"
            rate={1}
            price={65}
          ></ProductPreview>
        </div>
      </Container>
    </section>
  );
};

export default BestSeller;
