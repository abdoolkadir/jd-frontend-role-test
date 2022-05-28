function ProcessBar({ color, processRank, processText, title, width }) {
  return (
    <div className="process-bar" style={{ width: width }}>
      <div className="bar" style={{ backgroundColor: color }}>
        <div className="bar-text">
          <h4>{title}</h4>
          <p>{processText}</p>
        </div>
      </div>
      <h2 className="progress-rank">
        <span>0</span>
        {processRank}
      </h2>
    </div>
  );
}
export default ProcessBar;
