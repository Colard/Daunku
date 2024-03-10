import "./navbar.scss";

interface NavBarProps extends React.ComponentPropsWithoutRef<"nav"> {}

let NavBar: React.FC<NavBarProps> = ({ className, ...rest }) => {
  return (
    <nav className={`nav${className ? " " + className : ""}`} {...rest}>
      <ul className="nav__buttons">
        <li className="nav__item">
          <a href="#">Home</a>
        </li>
        <li className="nav__item">
          <a href="#">Shop</a>
        </li>
        <li className="nav__item">
          <a href="#">About Us</a>
        </li>
        <li className="nav__item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
