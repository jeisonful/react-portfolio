import logo from "../assets/logo.png"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="https://www.jeisonjmartinez.com" target="_blank">
            <img src={logo} alt="" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/jeisonjmartinez/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/jeisonful" target="_blank"><FaGithub /></a>
            <a href="https://www.instagram.com/jeisonful/" target="_blank"><FaInstagram /></a>
            <a href="#" target="_blank"><FaSquareXTwitter /></a>
        </div>
    </nav>
    );
    
};

export default Navbar;