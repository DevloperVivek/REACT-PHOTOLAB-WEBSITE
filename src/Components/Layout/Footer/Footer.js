import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerLinks}>
          <p className={classes.footerText}>
            © {new Date().getFullYear()} Developed by Vivek Raut
          </p>
        </div>
        <div className={classes.socialIcons}>
          <a
            href="https://www.instagram.com/thevivekraut/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialIcon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thevivekraut"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialIcon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1409/1409945.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialIcon}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/889/889111.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
