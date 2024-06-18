import { MdOutlineEmail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import "./contact.css";

export const CONTACT_OPTIONS = [
  {
    index: 1,
    option: "Email",
    classN: "contact_option",
    icon: <MdOutlineEmail className="contact-option-icon" />,
    refVal: "mailto:udarachinthaka135@gmail.com",
    Value: "udarachinthaka135@gmail.com",
    buttonText: "Send a Mail",
  },
  {
    index: 2,
    option: "WhatsApp",
    classN: "contact_option",
    icon: <ImWhatsapp className="contact-option-icon" />,
    refVal: "https://api.whatsapp.com/send?phone=99566123563",
    value: "+99 566 123 563",
    buttonText: "Send a Message",
  },
];
