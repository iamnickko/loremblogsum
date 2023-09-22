import classes from './BlogList.module.css';
import Card from "../components/UI/Card";
import Link from "next/link";

const BlogList = (props) => {
  const allBlogs = props.blogs;

  return (
    <>
      {allBlogs.map((blog) => (
        <Card className={classes.card} key={blog.id}>
          <Link href={`/posts/${blog.id}`}>
            <article className={classes.list}>
              <h2 className={classes.title}>{blog.title}</h2>
              {/* <h5 className={classes.subtitle}>Written by {blog.userId}</h5> */}
              <p className={classes.body}>{blog.body}</p>
            </article>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default BlogList;
