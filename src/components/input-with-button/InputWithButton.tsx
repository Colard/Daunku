import "./input-with-button.scss";
import GradientButton from "../gradient-button/GradientButton";

interface InputWithButtonProps extends React.ComponentPropsWithoutRef<"div"> {
  onClick?: React.MouseEventHandler;
  placeholder: string;
  inputId?: string;
  name?: string;
  autoComplete?: string;
}

let InputWithButton: React.FC<InputWithButtonProps> = ({
  children,
  className,
  placeholder,
  onClick,
  inputId,
  name,
  autoComplete,
  ...rest
}) => {
  return (
    <div
      className={`input-with-button${className ? " " + className : ""}`}
      {...rest}
    >
      <input
        type="text"
        className="input-with-button__input"
        placeholder={placeholder}
        id={inputId}
        autoComplete={autoComplete}
      ></input>

      <GradientButton
        onClick={onClick}
        className="input-with-button__submit"
        buttonType="button"
      >
        {children}
      </GradientButton>
    </div>
  );
};

export default InputWithButton;
