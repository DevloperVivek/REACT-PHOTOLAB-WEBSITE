import React from "react";
import classes from "./Favourite.module.css";

const Favourite = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Coming Soon</h2>
      <p className={classes.text}>
        We're working on an exciting new feature that allows you to add images
        to your favorites!
      </p>
      <p className={classes.text}>
        Stay tuned for updates and be ready to save your favorite photos with a
        single click.
      </p>
    </div>
  );
};

export default Favourite;
