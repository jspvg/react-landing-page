interface GetStartedButtonProps {
  color: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ color }) => {
  const btnclass =
    color === 'orange'
      ? 'btn-red-orange text-white'
      : 'btn-white text-red-orange';
  return (
    <button className={`btn ${btnclass} rounded-pill`}>Get Started</button>
  );
};

export default GetStartedButton;
