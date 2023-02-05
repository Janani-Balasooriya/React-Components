import Logo from "./Logo";
import "./Navbar.css";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <NavLinks />
      <NavButton />
    </div>
  );
}

export default Navbar;
