import classes from "./ContributorList.module.css";
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";
import Image from "next/image";
import Card from "../components/UI/Card";

const ContributorList = async () => {
  const contributors = await getAllUsers();
  return (
    <ul className={classes.grid}>
      {contributors.map((user) => (
        <Card className={classes.card}>
          <Link key={user.id} href={`/contributors/${user.id}`}>
            <article className={classes.contributor}>
              <Image
                src={"/profile.png"}
                width={300}
                height={300}
                alt={user.name}
              />
              <h2>{user.name}</h2>
              <p>{user.company.name}</p>
            </article>
          </Link>
        </Card>
      ))}
    </ul>
  );
};

export default ContributorList;
