import Logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <div className="border-b border-gray-200 sticky top-0 bg-white z-50 ">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="md:hidden">
          <RxHamburgerMenu className="w-8 h-8 text-[#7B7171]" />
        </div>

        <img src={Logo} alt="Logo" className="w-40 md:w-auto" />

        <div className="hidden md:flex gap-8">
          <p className="cursor-pointer text-[#DB2777]">Home</p>
          <p className="cursor-pointer text-[#475569]">Technologies</p>
          <p className="cursor-pointer text-[#475569]">Projects</p>
          <p className="cursor-pointer text-[#475569]">About</p>
          <p className="cursor-pointer text-[#475569]">Contact</p>
        </div>

        <div className="flex gap-2 md:gap-4">
          <button className="btn border-none bg-transparent text-[#475569]">Sign In</button>
          <button className="btn btn-secondary rounded-4xl text-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
