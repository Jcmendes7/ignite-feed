import styles from "./Header.module.css";
import logoIgnite from "../images/ignite-logo.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <strong>
        <img src={logoIgnite} alt="logo ignite" />
      </strong>
    </header>
  );
}
