import Logo from "./Logo";
import "./Navbar.css";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-navlinks">
        <Logo />
        <NavLinks />
      </div>
      <NavButton />
    </div>
  );
}

export default Navbar;
