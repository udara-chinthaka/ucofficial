import { MdWork } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import "./Career.css";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Career = () => {
  return (
    <div>
      <h2>My Journey</h2>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          //   let showButton =
          //     element.buttonText !== undefined &&
          //     element.buttonText !== null &&
          //     element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconClassName="icon"
              icon={isWorkIcon ? <MdWork /> : <MdSchool />}
            >
              <h3>{element.title}</h3>
              <h5>{element.location}</h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Career;
