import LinkBtn from './LinkBtn';

function ClickHereForMore({ className, text, width, bgColor, padding }) {
  return (
    <div
      className={className}
      style={{ width: width, backgroundColor: bgColor, padding: padding }}
    >
      <p>{text}</p>
      <LinkBtn btnText="View more" className="btn" link={'/portfolio'} />
    </div>
  );
}
export default ClickHereForMore;
