import { ImagePath, SingleBlogHeading } from "@/Constants";
import { SingleBlogParagraph, SingleBlogParagraphs } from "@/Data/Miscellaneous/Blog";
import Image from "next/image";

export const SingleBlogData = () => {
  return (
    <div className="blog-box blog-details">
      <Image width={1551} height={291} className="img-fluid w-100" src={`${ImagePath}/blog/blog-single.jpg`} alt="blog-main" />
      <div className="blog-details">
        <ul className="blog-social d-block">
          <li className="rounded-0">25 July 2024</li>
          <li>
            <i className="icofont icofont-user" />
            Mark Jecno
          </li>
          <li className="digits">
            <i className="icofont icofont-thumbs-up" /> 02<span>Hits</span>
          </li>
          <li className="digits">
            <i className="icofont icofont-ui-chat" /> Comments
          </li>
        </ul>
        <h4 className="pt-3">{SingleBlogHeading}</h4>
        <div className="single-blog-content-top">
          <p className="mt-1">{SingleBlogParagraph}</p>
          <p>{SingleBlogParagraphs}</p>
        </div>
      </div>
    </div>
  );
};
