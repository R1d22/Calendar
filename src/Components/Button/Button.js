import "./styles.scss";

const Button = ({ accept, text }) => {
  return (
    <button className="btn" onClick={() => accept(false)} type="submit">
      {text}
    </button>
  );
};

export default Button;
