import classes from "./BlogDetails.module.css";
import Link from "next/link";

const BlogDetails = (props) => {
  const { blog, blogAuthor } = props;
  return (
    <section className={classes.details}>
      <h1 className={classes.title}>{blog.title}</h1>
      <h5 className={classes.subheading}>
        Written by{" "}
        <Link href={`/contributors/${blogAuthor.id}`}>{blogAuthor.name}</Link>
      </h5>
      <p className={classes.body}>{blog.body}</p>
    </section>
  );
};

export default BlogDetails;
