import Header from "../header/Header";
import "./hero.scss";
import heroImg from "../../assets/hero/Hero.png";
import ImageTooltip from "../../components/image-tooltip/ImageTooltip";
import InputWithButton from "../../components/input-with-button/InputWithButton";
import searchButton from "../../assets/hero/search.svg";
import React from "react";

interface HeroProps extends React.ComponentPropsWithoutRef<"section"> {}

let Hero: React.FC<HeroProps> = ({ ...rest }) => {
  let form = React.useRef<HTMLFormElement>(null);

  let formButtonClick: React.MouseEventHandler = () => {
    form.current?.dispatchEvent(new Event("submit", { bubbles: true }));
  };

  let handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    form.current?.reset();
  };

  return (
    <section className="hero" {...rest}>
      <img src={heroImg} alt="Hero" className="hero__background"></img>
      <div className="hero__top-layout">
        <Header className="hero__hedaer"></Header>

        <div className="hero__title">
          <h1>Bring Serenity to Your Place With Interior Plants</h1>
          <p>
            find your dream plant for you home decoration with us, and we will
            make it happen.
          </p>
        </div>

        <form onSubmit={handleSubmit} ref={form}>
          <InputWithButton
            className="hero__search-form"
            placeholder="Search plant"
            onClick={formButtonClick}
          >
            <img src={searchButton} alt="Search button" />
          </InputWithButton>
        </form>

        <ImageTooltip
          className="hero__tooltip hero__tooltip1"
          price={65.0}
          name="Dracena Fragnas"
        ></ImageTooltip>

        <ImageTooltip
          className="hero__tooltip hero__tooltip2"
          price={165.0}
          name="Dracena Fragnas Fragnas"
        ></ImageTooltip>

        <ImageTooltip
          className="hero__tooltip hero__tooltip3"
          price={55.0}
          name="Dracena Fragnas Fragnas"
        ></ImageTooltip>
      </div>
    </section>
  );
};

export default Hero;
