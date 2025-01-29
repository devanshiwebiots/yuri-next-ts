import { Button, Row } from "reactstrap";
import CourseCategories from "./CourseCategories";
import CategoriesCheckBoxes from "./Categories";
import UpcomingCourses from "./UpcomingCourses";
import { LearningFilter } from "@/Constants";
import { useState } from "react";

const CourseFilter = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => { setOpen(!open); }
  return (
    <div className="md-sidebar">
      <Button color="primary" onClick={toggle} className="email-aside-toggle md-sidebar-toggle">{LearningFilter}</Button>
      <div className={`md-sidebar-aside job-sidebar custom-scrollbar ${open ? 'open' : ''}`}>
        <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
          <Row>
            <CourseCategories />
            <CategoriesCheckBoxes />
            <UpcomingCourses />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;