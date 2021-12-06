import styles from "./styles.module.scss";
import { SignButton } from "../SignButton";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <img src="/images/logo.svg" alt="" />
        <nav>
          <Link href="/">
            <a className={pathname === "/" ? styles.active : ""}>Home</a>
          </Link>

          <Link href="/post">
            <a className={pathname === "/post" ? styles.active : ""}>Posts</a>
          </Link>
        </nav>
        <SignButton />
      </div>
    </header>
  );
};
