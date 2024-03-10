import "./container.scss";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

let Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <div  {...rest} className="container">
      {children}
    </div>
  );
};

export default Container;
