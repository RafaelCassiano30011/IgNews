import styles from "./styles.module.scss";
import { SignButton } from "../SignButton";

import { ActiveLink } from "../ActiveLink";

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Post</a>
          </ActiveLink>
        </nav>
        <SignButton />
      </div>
    </header>
  );
};
