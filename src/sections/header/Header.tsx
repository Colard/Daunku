import Container from "../../components/container/Container";
import "./header.scss";
import logo from "../../assets/hero/logo.svg";
import NavBar from "../../components/nav-bar/NavBar";
import Cart from "../../components/cart/Cart";

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
          <Cart className="header__chart" count={1}></Cart>
        </div>
      </Container>
    </header>
  );
};

export default Header;
