import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, Logo } from "../";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center py-4 mx-auto w-11/12 h-[86px]">
        <Logo width="181px" height="43px" />
        <nav className="hidden md:flex space-x-9 items-center">
          <a href="#" className="text-[#6D6E71] text-sm">
            Find Suppliers
          </a>
          <a href="#" className="text-[#6D6E71] text-sm">
            <select className="custom-select bg-transparent border-none text-sm">
              <option>Find Service Tags</option>
            </select>
          </a>
          <Button
            width="193.31px"
            height="50px"
            border="1px solid #00732F"
            color="#00732F"
            fontWeight="700"
            fontSize="15px"
            name = "Login / Sign Up"
          />
        </nav>
        <button className="md:hidden text-[#00732F]" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-start ml-2 space-y-4 py-4">
            <a href="#" className="text-[#6D6E71] text-sm">
              Find Suppliers
            </a>
            <a href="#" className="text-[#6D6E71] text-sm">
              <select className="custom-select bg-transparent border-none text-sm">
                <option>Find Service Tags</option>
              </select>
            </a>
            <Button
              width="193.31px"
              height="50px"
              border="1px solid #00732F"
              color="#00732F"
              fontWeight="700"
              fontSize="15px"
            name = "Login / Sign Up"
            />
          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;
