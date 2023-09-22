import classes from "./page.module.css";
import ContributorList from "./ContributorList";

const Contributors = async () => {
  return (
    <>
      <section>
        <h1 className={classes.title}>Our Greatest Lorem Ipsum Writers</h1>
      </section>
      <section>
        <ContributorList />
      </section>
    </>
  );
};

export default Contributors;

export const metadata = {
  title: 'Contributors of LoremBlogsum',
  description: 'A list of the greatest Lorem Ipsum contributors.'
}
