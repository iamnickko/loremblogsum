import classes from "./page.module.css";
import BlogList from "./posts/BlogList";
import getAllBlogs from "./lib/getAllBlogs";

export default async function Home() {
  const allBlogs = await getAllBlogs();
  const someBlogs = allBlogs.slice(0, 20);

  return (
    <main>
      <section className={classes.headings}>

      <h1 className={classes.title}>This is a blog made from JSONPlaceholder's Lorem Ipsum API</h1>
      <h4 className={classes.subtitle}>A project built to explore and play with Next.js</h4>
      </section>
<section>

      <ul className={classes.grid}>
        <BlogList blogs={someBlogs} />
      </ul>
</section>
    </main>
  );
}

export const metadata = {
  title: 'LoremBlogsum',
  description: 'This is a project blog made by Nick while experimenting with Next.js.'
}
