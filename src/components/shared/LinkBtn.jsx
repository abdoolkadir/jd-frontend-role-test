import { Link } from 'react-router-dom';

function LinkBtn({ link, btnText, className }) {
  return (
    <Link className={className} to={link}>
      {btnText}
    </Link>
  );
}
export default LinkBtn;
