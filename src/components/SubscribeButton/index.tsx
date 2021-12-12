import { useSession, signIn, session } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = (props: SubscribeButtonProps) => {
  const [session] = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (!session) {
      signIn("github");
      return;
    }

    if (session.ActiveSubscription) {
      router.push("/posts");
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionid } = response.data;

      const stripe = await getStripeJs();

      console.log(stripe);

      await stripe.redirectToCheckout({ sessionId: sessionid });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button type="button" onClick={handleSubscribe} className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
};
