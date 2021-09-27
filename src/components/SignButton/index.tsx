import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export const SignButton = () => {
  const isUserLoggedIn = true;
  return isUserLoggedIn ? (
    <button className={styles.ButtonSign} type="button">
      <FaGithub color="#04D361" />
      RafaelCassiano30011
      <FiX className={styles.CloseIcon} color="#737380" />
    </button>
  ) : (
    <button className={styles.ButtonSign} type="button">
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  );
};
