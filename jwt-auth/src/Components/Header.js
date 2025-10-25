import "./css/header.css";
function Header() {
  return (
    <div className="header">
      <h2 className="logo">
        <a href="#">
          F<span>OC</span>US
        </a>
      </h2>
      <ul className="header-list">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
