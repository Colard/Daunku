import React from "react";
import InputWithButton from "../../components/input-with-button/InputWithButton";
import "./footer.scss";

interface Footer extends React.ComponentPropsWithoutRef<"footer"> {}

let Footer: React.FC<Footer> = ({ className, ...rest }) => {
  let form = React.useRef<HTMLFormElement>(null);

  let formButtonClick: React.MouseEventHandler = () => {
    form.current?.dispatchEvent(new Event("submit", { bubbles: true }));
  };

  let handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    form.current?.reset();
  };

  return (
    <footer className={"footer" + (className ? " " + className : "")} {...rest}>
      <div className="footer__main">
        <form
          action=""
          method="POST"
          className="footer__subscribe"
          ref={form}
          onSubmit={handleSubmit}
        >
          <label className="footer__subscribe-header" htmlFor="e-mail">
            Newslatter
          </label>

          <InputWithButton
            className="footer__subscribe"
            placeholder="Enter your email"
            inputId="e-mail"
            name="e-mail"
            autoComplete="email"
            onClick={formButtonClick}
          >
            Subscribe
          </InputWithButton>
        </form>

        <nav className="footer__nav">
          <div className="footer__nav-colmn">
            <h2 className="footer__nav-header">Support</h2>
            <ul className="footer__nav-item-colmn">
              <li>
                <a className="footer__anchor">About Us</a>
              </li>
              <li>
                <a className="footer__anchor">Careers</a>
              </li>
              <li>
                <a className="footer__anchor">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav-colmn">
            <h2 className="footer__nav-header">Useful Link</h2>
            <ul className="footer__nav-item-colmn">
              <li>
                <a className="footer__anchor">Payment & Tax</a>
              </li>
              <li>
                <a className="footer__anchor">Team of service</a>
              </li>
              <li>
                <a className="footer__anchor">Privaci Policy</a>
              </li>
            </ul>{" "}
          </div>

          <div className="footer__nav-colmn">
            <h2 className="footer__nav-header">Our Menu</h2>
            <ul className="footer__nav-item-colmn">
              <li>
                <a className="footer__anchor">Best Product</a>
              </li>
              <li>
                <a className="footer__anchor">Category</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav-colmn">
            <h2 className="footer__nav-header">Address</h2>
            <ul className="footer__nav-item-colmn">
              <li>
                <p className="footer__paragraph">
                  JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia
                </p>
              </li>
              <li>
                <p className="footer__paragraph">hallo@daunku.com</p>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <hr />

      <p className="footer__copyright">© 2022 Daunku - All rights reserved.</p>
    </footer>
  );
};

export default Footer;
