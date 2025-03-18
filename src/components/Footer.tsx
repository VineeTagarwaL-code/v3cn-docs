import styles from "../styles/Layout.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Copyright © 2024 - vineet.tech</span>
      <div>
        <a target="_blank" href="https://github.com/VineeTagarwaL-code/v3cn-docs" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
