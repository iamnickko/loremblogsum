import classes from "./BlogComments.module.css";

const BlogComments = (props) => {
  const comments = props.comments;
  return (
    <section className={classes["comments-list"]}>
      <ul>
        {comments.map((comment) => (
          <li className={classes.comment}>
            <article>
              <h5 className={classes.user}>{comment.name} says:</h5>
              <p className={classes.body}>{comment.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogComments;
