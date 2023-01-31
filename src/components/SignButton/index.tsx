/** @format */

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/client";

export const SignButton = () => {
  const [session] = useSession();

  return session ? (
    <button
      className={styles.ButtonSign}
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        signOut();
      }}
    >
      <FaGithub color="#04D361" />
      {session.user?.name}
      <FiX className={styles.CloseIcon} color="#737380" />
    </button>
  ) : (
    <button
      className={styles.ButtonSign}
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        signIn("github");
      }}
    >
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
};
