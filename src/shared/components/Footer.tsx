import React from "react";
import styles from "./Footer.module.css"; // Import any CSS styles for the footer here

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>&copy; 2023 Campscape. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
