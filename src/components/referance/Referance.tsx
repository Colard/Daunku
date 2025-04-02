import "./referance.scss";
import livingRoom from "../../assets/referance/image1.jpg";
import workplace from "../../assets/referance/image2.jpg";
import bedroom from "../../assets/referance/image3.jpg";
import Container from "../container/Container";

interface ReferanceProps extends React.ComponentPropsWithoutRef<"section"> {}

let Referance: React.FC<ReferanceProps> = ({ className, ...rest }) => {
  return (
    <section
      className={"referance" + (className ? " " + className : "")}
      {...rest}
    >
      {" "}
      <Container>
        <div className="referance__header">
          <h3 className="referance__title">Interior Plant Reference</h3>

          <p className="referance__description">
            make your home so comfortable with refreshing plants
          </p>
        </div>
        <div className="referance__galery">
          <div className="referance__image-container referance__image-container1">
            <img
              className="referance__image"
              src={livingRoom}
              alt="living room"
            />
          </div>

          <div className="referance__image-container referance__image-container2">
            <img className="referance__image" src={workplace} alt="workplace" />
          </div>

          <div className="referance__image-container referance__image-container3">
            <img className="referance__image" src={bedroom} alt="bedroom" />
          </div>
        </div>{" "}
      </Container>
    </section>
  );
};

export default Referance;
