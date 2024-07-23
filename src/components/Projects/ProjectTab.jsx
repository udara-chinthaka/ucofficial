import { BsCheckCircle } from "react-icons/bs";

let techPoint;

export default function ProjectTab({
  id,
  name,
  description,
  techPoints,
  url,
  MenuContainer = "article",
}) {
  techPoint = techPoints.split(",");

  return (
    <>
      <MenuContainer className="project_details">
        <BsCheckCircle className="project_details-icon" />
        <div key={id}>
          <h4>{name}</h4>

          <small className="text-light"> {description}</small>
          <br />
          {techPoint.map((item, index) => {
            return (
              <div className="span_container">
                <span className="tech" key={index}>
                  {item}
                </span>
              </div>
            );
          })}
          <br />
          <a href={url} target="_blank" rel="noreferrer">
            <button className="projectButton">View App</button>
          </a>
        </div>
      </MenuContainer>
    </>
  );
}
