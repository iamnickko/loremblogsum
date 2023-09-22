import BlogComments from "../BlogComments";
import BlogDetails from "../BlogDetails";
import getBlog from "@/app/lib/getBlog";
import getPostComments from "@/app/lib/getPostComments";
import getUser from "@/app/lib/getUser";


const PostDetails = async ({ params }) => {
    const id = params.id;
    const blog = await getBlog(id)
    const comments = await getPostComments(id)
    const blogAuthor = await getUser(blog.userId)

  return (
    <>
      <BlogDetails blog={blog} blogAuthor={blogAuthor} />
        <h2>Comments:</h2>
        <BlogComments comments={comments}/>
    </>
  );
};

export default PostDetails;

export const generateStaticParams = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json()
  return posts.map((post) => (
    {
      id: post.id.toString(),
    }
  ));
};
