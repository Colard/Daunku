import "./navbar.scss";

interface NavBarProps extends React.ComponentPropsWithoutRef<"nav"> {}

let NavBar: React.FC<NavBarProps> = ({ className, ...rest }) => {

  const activeNavbar = (e: React.MouseEvent) => {
    const el = e.currentTarget;
    const isActive = el.classList.contains("active");
  
    el.classList.toggle("active", !isActive);
    el.classList.toggle("inactive", isActive);
  };

  return (
    <nav className={`nav${className ? " " + className : ""}`} {...rest}>
      <div className="nav__burger" onClick={activeNavbar}>
          <span></span>
          <span></span>
          <span></span>
      </div>
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
