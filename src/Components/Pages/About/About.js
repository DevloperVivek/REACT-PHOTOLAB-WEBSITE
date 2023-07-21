import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>About PhotoLab</h1>
      <p className={classes.description}>
        At PhotoLab, we are passionate about capturing the beauty of life
        through stunning photographs. With years of experience and a team of
        talented photographers, we specialize in delivering high-quality images
        that leave a lasting impression. Whether it's a special event, a family
        portrait, or a corporate project, we pride ourselves on our
        professionalism and attention to detail. Our goal is to exceed your
        expectations and create visual memories that you can cherish for a
        lifetime. Trust PhotoLab for all your photography needs and let us
        capture the essence of your precious moments with precision and
        artistry.
      </p>
    </div>
  );
};

export default About;
