import { DateLearning } from "@/Constants";
import { DetailedCourseHeading, DetailedCourseParagraph1, DetailedCourseParagraph2 } from "@/Data/Miscellaneous/Learning";

const BlogDetails = () => {
  return (
    <div className="blog-details">
      <ul className="blog-social d-block">
        <li className="rounded-0">{DateLearning}</li>
        <li><i className="icofont icofont-user" />Mark <span>Jecno </span></li>
        <li><i className="icofont icofont-thumbs-up" />02 <span>Hits </span></li>
        <li><i className="icofont icofont-ui-chat" />Comments</li>
      </ul>
      <h4>{DetailedCourseHeading}</h4>
      <div className="single-blog-content-top">
        <p>{DetailedCourseParagraph1}</p>
        <p>{DetailedCourseParagraph2}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
