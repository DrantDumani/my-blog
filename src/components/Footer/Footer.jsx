import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Created by Darnell</p>
      <a className={styles.footerLink} href="https://github.com/DrantDumani">
        Github
      </a>
      <p>Created with React Router, Postgres, Node, and ExpressJS.</p>
      <p>
        All svgs used were downloaded from{" "}
        <a className={styles.footerLink} href="https://www.svgrepo.com/">
          SVG Repo
        </a>
      </p>
    </footer>
  );
}
