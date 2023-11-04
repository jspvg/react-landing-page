interface ButtonProps {
  color: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  const btnclass =
    color === 'orange'
      ? 'btn-red-orange text-white'
      : 'btn-white text-red-orange';
  return (
    <button className={`btn ${btnclass} rounded-pill`}>{text}</button>
  );
};

export default Button;
