function PagesHeader({ headerText, subText }) {
  return (
    <header className="pages-header">
      <div className="container">
        <h1>{headerText}</h1>
        <p>{subText}</p>
      </div>
    </header>
  );
}
export default PagesHeader;
