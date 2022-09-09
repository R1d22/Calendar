import "./styles.scss";

const MonthButton = ({ month, plus, minus, year }) => {
  return (
    <div className="main-container">
      <div className="back" onClick={minus}>
        &lsaquo;
      </div>
      <div className="pros-info">
        {month} {year}
      </div>
      <div className="next" onClick={plus}>
        &rsaquo;
      </div>
    </div>
  );
};

export default MonthButton;
