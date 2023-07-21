// import React from "react";
// import classes from "./Footer.module.css";

// const Footer = () => {
//   return (
//     <div className={classes.container}>
//       <footer className={classes.footer}>
//         <div className={classes.footerContainer}>
//           <div className={classes.footerLinks}>
//             <a href="/contact" className={classes.footerLink}>
//               Contact
//             </a>
//             <a href="/about" className={classes.footerLink}>
//               About
//             </a>
//           </div>
//           <div className={classes.socialIcons}>
//             <a
//               href="https://www.instagram.com/thevivekraut/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={classes.socialIcon}
//             >
//               <img
//                 src="https://img.icons8.com/?size=1x&id=nj0Uj45LGUYh&format=png"
//                 alt="Instagram"
//               />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/thevivekraut"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={classes.socialIcon}
//             >
//               <img
//                 src="https://img.icons8.com/?size=1x&id=MR3dZdlA53te&format=png"
//                 alt="LinkedIn"
//               />
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerContainer}>
        <div className={classes.footerLinks}>
          <a href="/contact" className={classes.footerLink}>
            Contact
          </a>
          <a href="/about" className={classes.footerLink}>
            About
          </a>
        </div>
        <div className={classes.socialIcons}>
          <a
            href="https://www.instagram.com/thevivekraut/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.socialIcon}
          >
            <img
              src="https://img.icons8.com/?size=1x&id=nj0Uj45LGUYh&format=png"
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
              src="https://img.icons8.com/?size=1x&id=MR3dZdlA53te&format=png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
