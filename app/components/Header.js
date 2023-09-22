import classes from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link href={"/"}>
          <h1 className={classes.title}>LoremBlogsum</h1>
        </Link>
      </div>

      <nav className={classes.nav}>
        {/* <Link href="/posts">Posts</Link> */}
        <Link href="/contributors">Contributors</Link>
      </nav>
    </header>
  );
};
export default Header;
