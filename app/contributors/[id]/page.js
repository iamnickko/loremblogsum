import BlogList from "@/app/posts/BlogList";
import getAllBlogs from "@/app/lib/getAllBlogs";
import getUser from "@/app/lib/getUser";
import ContributorDetails from "../ContributorDetails";


const ContributorDetailsPage = async ({ params }) => {
  const id = params.id;
  const contributor = await getUser(id);
  const allBlogs = await getAllBlogs();
  const contributorBlogs = allBlogs.filter(
    (blog) => blog.userId === contributor.id
  );

  return (
    <article>
      <ContributorDetails contributor={contributor} />
      <section>
        <h4>Explore other articles written by {contributor.name}:</h4>
        <BlogList blogs={contributorBlogs} />
      </section>
    </article>
  );
};

export default ContributorDetailsPage;

export const generateMetadata = async ({params}) => {
  const id = params.id
  const contributor = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await contributor.json()
  return {
    title: data.name,
    description: `The profile page of LoremBlogsum contributor ${data.name}`
  }
};

export const generateStaticParams = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const contributors = await response.json();
  return contributors.map((contributor) => ({
    id: contributor.id.toString(),
  }));
};

