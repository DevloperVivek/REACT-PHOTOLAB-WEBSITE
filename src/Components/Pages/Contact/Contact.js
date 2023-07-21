import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Contact Us</h2>
      <p className={classes.text}>
        For any inquiries or assistance, feel free to reach out to us via email
        or WhatsApp.
      </p>
      <p className={classes.text}>
        Email: <a href="mailto:vraut2306@gmail.com">vraut2306@gmail.com</a>
      </p>
      <p className={classes.text}>
        WhatsApp: <a href="tel:+919420165794">+91 9420165794</a>
      </p>
    </div>
  );
};

export default Contact;
