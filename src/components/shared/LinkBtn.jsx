import { Link } from 'react-router-dom';

function LinkBtn({ link, btnText }) {
  return (
    <Link className="btn" to={link}>
      {btnText}
    </Link>
  );
}
export default LinkBtn;
