import Container from "../container/Container";
import "./header.scss";
import logo from "../../assets/hero/logo.svg";
import NavBar from "../nav-bar/NavBar";
import Chart from "../chart/Chart";

interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {}

let Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`header${className ? " " + className : ""}`}>
      <Container>
        <div className="header__row">
          <div className="header__logo">
            <img alt="Logo" src={logo} className="header__logo-image"></img>
            <span className="header__company-name">Daunku</span>
          </div>
          <NavBar className="header__nav"></NavBar>
          <Chart className="header__chart"></Chart>
        </div>
      </Container>
    </header>
  );
};

export default Header;
