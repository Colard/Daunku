import React from "react";
import "./care.scss";
import Container from "../container/Container";

import pot from "../../assets/care/pot.svg";
import sun from "../../assets/care/sun.svg";
import temperature from "../../assets/care/temperature.svg";
import water from "../../assets/care/water.svg";
import plant from "../../assets/care/plant.jpg";

interface CareProps extends React.ComponentPropsWithoutRef<"section"> {}

interface DescriptionProps extends React.PropsWithChildren {
  src: string;
  alt: string;
  headerText: string;
}

let DescriptionInfo: React.FC<DescriptionProps> = ({
  src,
  alt,
  headerText,
  children,
}) => {
  return (
    <div className="description__item">
      <img className="description__image" src={src} alt={alt} />

      <div className="description__text">
        <h3 className="description__header">{headerText}</h3>
        <p className="description__paragraph">{children}</p>
      </div>
    </div>
  );
};

let Care: React.FC<CareProps> = ({ className, ...rest }) => {
  return (
    <section className={"care" + (className ? " " + className : "")} {...rest}>
      {" "}
      <Container>
        <div className="care__info">
          <div className="care__header">
            <h2 className="care__header-text">How to care for plants</h2>
            <p className="care__header-subtext">
              Take care of plants with all your heart
            </p>
          </div>

          <div className="care__description description">
            <DescriptionInfo
              src={sun}
              alt="sun icon"
              headerText="Adjust Lighting"
            >
              When caring for indoor plants, make sure the <br /> room
              temperature is neither too cold nor too hot
            </DescriptionInfo>
            <DescriptionInfo
              src={water}
              alt="water icon"
              headerText="Don't water too often"
            >
              Watering ornamental plants indoors does <br /> not have to be done
              every day
            </DescriptionInfo>
            <DescriptionInfo
              src={pot}
              alt="pot icon"
              headerText="Don't water too often"
            >
              Watering ornamental plants indoors does <br /> not have to be done
              every day
            </DescriptionInfo>
            <DescriptionInfo
              src={temperature}
              alt="temperature icon"
              headerText="Fertilize regularly"
            >
              The nutrients most indoor houseplants need are <br /> nitrogen for
              balance and potassium for stem <br /> strength
            </DescriptionInfo>
          </div>
        </div>

        <div className="care__image-container">
          <img className="care__image" src={plant} alt="plant"></img>
        </div>
      </Container>
    </section>
  );
};

export default Care;
