import "./nav.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="nav">
      <div className="nav--logo">
        <AiOutlineArrowLeft className="logo" />
      </div>
      <div className="nav--text">Micro Lesson</div>
      <div className="nav--loader">
        <BiLoaderCircle className="loader" />
      </div>
    </div>
  );
};

export default Nav;
