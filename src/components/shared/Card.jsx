function Card({ title, text, image, bgColor, overlayText }) {
  return (
    <div className="card" style={{ background: bgColor }}>
      <div className="text-overlay">
        <h1>{overlayText}</h1>
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
      <img src={image} alt="" />
    </div>
  );
}
export default Card;
