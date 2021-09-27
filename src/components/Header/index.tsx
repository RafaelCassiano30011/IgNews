import styles from "./styles.module.scss";
import { SignButton } from "../SignButton";

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a href="">Posts</a>
        </nav>
        <SignButton />
      </div>
    </header>
  );
};
