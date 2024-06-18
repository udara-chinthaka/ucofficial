import { BsCheckCircle } from "react-icons/bs";
import "./experiance.css";

export default function ExperianceTab({
  level,
  tech,
  MenuContainer = "article",
}) {
  return (
    <>
      <MenuContainer className="experiance_details">
        <BsCheckCircle className="experiance_details-icon" />
        <div>
          <h4>{tech}</h4>
          <small className="text-light"> {level}</small>
        </div>
      </MenuContainer>
    </>
  );
}
