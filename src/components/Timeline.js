import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React from "react";
// Material-ui Icons
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <div className="timeline-div">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#7DCEA0" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Feb. 2020 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Nordstrom</h3>
          <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
          <p>Software Engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug. 2019 - July 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ada Developers Academy Student (Cohort 12)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
          <p>
            Trained and built projects in Ruby, Ruby on Rails, JavaScript,
            React, HTML, and CSS
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug. 2016 - July 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Washington
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
          <p>
            Research administration, data analysis, WordPress content developer
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan. 2017 - June 2017"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Washington - Certificate in Digital Marketing
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Seattle, WA</h4>
          <p>
            Foundations in digital marketing, assisted a local brewery with
            their digital marketing plan
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Arts in Law, Societies, and Justice
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Minor in Political Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
