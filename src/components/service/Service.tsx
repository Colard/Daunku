import box from "../../assets/sevices/box.svg";
import headphone from "../../assets/sevices/Headphone.svg";
import wallet from "../../assets/sevices/wallet.svg";
import Container from "../container/Container";

import "./service.scss";

interface ServiceItemProps {
  src: string;
  title: string;
  description: string;
  alt: string;
}

interface ServiceProps extends React.ComponentPropsWithoutRef<"section"> {}

let Service: React.FC<ServiceProps> = ({ ...rest }) => {
  return (
    <section className="service" {...rest}>
      <Container>
        <div className="service__row">
          <ServiceItem
            src={box}
            alt="box"
            title="Free Shapping"
            description="No charge for each delivery"
          ></ServiceItem>

          <ServiceItem
            src={wallet}
            alt="wallet"
            title="Quick Payment"
            description="100% secure payment"
          ></ServiceItem>

          <ServiceItem
            src={headphone}
            alt="headphone"
            title="24/7 Support"
            description="Quick support"
          ></ServiceItem>
        </div>
      </Container>
    </section>
  );
};

let ServiceItem: React.FC<ServiceItemProps> = ({ src, title, description, alt }) => {
  return (
    <div className="service__item">
      <div className="service__image-container">
        <img src={src} alt={alt}></img>
      </div>
      <div className="service__text">
        <p className="service__title">{title}</p>
        <p className="service__description">{description}</p>
      </div>
    </div>
  );
};

export default Service;
