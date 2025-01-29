import { CommentTitleLearning, ImagePath } from "@/Constants";
import { LearningCommentOne, LearningCommentThree } from "@/Data/Miscellaneous/Learning";
import Image from "next/image";
import UserComment from "../../Blog/BlogSingle/common/UserComment";
import BlogDetails from "./BlogDetails";

const BlogSingle = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="blog-single">
          <div className="blog-box blog-details">
            <Image width={1145} height={716} className="img-fluid w-100" src={`${ImagePath}/faq/learning-1.png`} alt="blog-main" />
            <BlogDetails />
          </div>
          <section className="comment-box">
            <h4>{CommentTitleLearning}</h4>
            <hr />
            <ul>
              <UserComment ImageSrc="comment.jpg" userReplay text={LearningCommentOne} />
              <UserComment ImageSrc="4.jpg" text={LearningCommentThree} />
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
