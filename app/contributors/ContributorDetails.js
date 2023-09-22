import classes from './ContributorDetails.module.css'
import Image from "next/image";

const ContributorDetails = (props) => {
  const { contributor } = props;
  return (
    <section className={classes.details}>
      <div className={classes.image}>
        <Image
          src={"/profile.png"}
          width={400}
          height={400}
          alt={contributor.name}
        />
      </div>
      <div className={classes.text}>
        <h1>{contributor.name}</h1>
        <h5>{contributor.website}</h5>
        <h3>Employed at: </h3>
        <p>{contributor.company.name}</p>
        <p>"{contributor.company.catchPhrase}"</p>
      </div>
    </section>
  );
};

export default ContributorDetails;
