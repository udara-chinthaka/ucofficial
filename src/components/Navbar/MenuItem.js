import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";

export const MenuItems = [
  { sectionID: "#home", icon: <AiOutlineHome /> },
  { sectionID: "#about", icon: <AiOutlineUser /> },
  { sectionID: "#experiance", icon: <BiBook /> },
  { sectionID: "#project", icon: <AiOutlineProject /> },
  { sectionID: "#contact", icon: <BiMessageSquareDots /> },
];
