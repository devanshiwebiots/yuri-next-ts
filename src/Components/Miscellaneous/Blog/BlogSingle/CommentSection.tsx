import { Comments } from "@/Constants";
import { CommentBlog2, SingleBlogParagraph, SingleBlogParagraphs } from "@/Data/Miscellaneous/Blog";
import UserComment from "./common/UserComment";

const CommentSection = () => {
  return (
    <section className="comment-box">
      <h4>{Comments}</h4>
      <hr />
      <ul>
        <UserComment ImageSrc="comment.jpg" userReplay text={SingleBlogParagraph} />
        <UserComment ImageSrc="4.jpg" text={CommentBlog2} />
        <UserComment ImageSrc="12.png" text={SingleBlogParagraphs} />
        <UserComment ImageSrc="14.png" text={SingleBlogParagraphs} />
      </ul>
    </section>
  );
};

export default CommentSection;
